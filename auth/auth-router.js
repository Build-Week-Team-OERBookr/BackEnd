const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("../models/users-model");
const validateUser = require("./validateUser");
const generateToken = require("./generateToken");

router.post("/registration", checkUserInput, (req, res) => {
    const user = req.body;
    const validationResult = validateUser(user, req.path); 
    
    if (validationResult.isSuccessful) {
        const token = generateToken(user);
        const hashedPassword = bcrypt.hashSync(user.password, 12);
        user.password = hashedPassword;

        Users.add(user)
        .then(user => res.status(200).json({ user, token }))
        .catch(err => res.status(500).json({ error: "The server encountered an error while registering the user." }));
    } else {
        res.status(400).json({
            message: "message: `please enter name and password.",
            errors: validationResult.errors
        });
    };
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    const validationResult = validateUser(req.body, req.path);

    if (validationResult.isSuccessful) {
        Users.getByUsername(username)
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({ message: `Welcome ${user.username}!`, token });                
            } else if (user) {
                res.status(400).json({ message: "Username and password do not match." });
            } else {
                res.status(400).json({ message: "A user with that username does not exist." });
            };
        })
        .catch(err => res.status(500).json({ message: "login information not found" }));
     } 
    //else {
    //     res.status(400).json({
    //         message: "Invalid credentials, please refer to errors.",
    //         errors: validationResult.errors
    //     });
    //};
});


//middleware

function checkUserInput (req, res, next) {
    Users.getByUsername(req.body.username)
    .then(user => {
        if (!user) {
            next();
        } else {
            res.status(400).json({ message: " that username is already exists in the db ." })
        }
    })
    .catch(err => res.status(500).json({ message: "resigtration error has occurred"}))
}  



module.exports = router;




// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');

// const Users = require('../models/users-model');
// const generateToken = require("./generateToken");

// router.post('/registration', validateUser, (req, res) => {
//     const userData = req.body;
//     const hashedPassword = bcrypt.hashSync(userData.password, 12);
//     userData.password = hashedPassword;

//     Users.add(userData)
//         .then(user => {
//             const token = generateToken(user)
//             res.status(201).json({ user, token })
//         })
//         .catch(err => {
//             res.status(404).json({ errorMessage: 'unable to register user' });
//         })
// })

// router.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     Users.getByUsername({ username })
//         .first()
//         .then(user => {
//             if (user && bcrypt.compareSync(password, user.password)) {
//                 const token = generateToken(user)
//                 res.status(201).json({ message: `Welcome, ${user.username}`, token  });
//             } else {
//                 res.status(400).json({ errorMessage: 'invalid user credentials, Username or password do not match.' })
//             }
//         })
//         .catch(err => {
//             res.status(400).json({ errorMessage: 'login failed, user with that username does not exist' })
//         })
// })

// // router.get('/users', authenticate, (req, res) => {
// //     Users.getUsers()
// //         .then(users => {
// //             res.json(users);
// //         })
// //         .catch(err => {
// //             res.status(404).json({ errorMessage: 'cannot get users from database' });
// //         })
// // })

// //Middleware

// function authenticate(req, res, next) {
//     const { username, password } = req.headers;
//     if (username && password) {
//         Users.authUser({ username })
//             .first()
//             .then(user => {
//                 if (user && bcrypt.compareSync(password, user.password)) {
//                     console.log('Welcome,', username);
//                 } else {
//                     res.status(401).json({ errorMessage: 'You shall not pass!' })
//                 }
//             })
//             .catch(err => {
//                 res.status(400).json({ errorMessage: 'login failed' })
//             })
//     } else {
//         res.status(400).json({ errorMessage: 'invalid user credentials' })
//     }
//     next();
// }

// function validateUser(req, res, next) {
//     const userData = req.body;
//     if (!userData.username) {
//         res.status(400).json({ errorMessage: 'missing  username field' })
//     } else if (!userData.password) {
//         res.status(400).json({ errorMessage: 'missing password field' })
//     } else {
//         console.log('user validated');
//         next();
//     }
// }

// module.exports = router;