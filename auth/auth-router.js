const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("../models/users-model");
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

function validateUser (user, path) {
    const errors = [];

    if (!user.username || user.username.length < 3) {
        errors.push('A username must be 4 or more characters long.')
    }

    if (!user.password || user.password.length < 3) {
        errors.push('A password must be 3 or more characters long.')
    }

    return { 
        isSuccessful: !Boolean(errors.length),
        errors
    }
};

module.exports = router;



