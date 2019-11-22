const express = require('express');

const db = require('../database/db-config.js');

const router = express.Router();
const Users = require("../models/users-model");
const restricted = require("../auth/restricted");

 router.get('/', restricted, (req, res) => {
    db('users')
    .then(users => {
      users = users.map(user => {
        return {id: user.id, username: user.username}
      })
      res.status(200).json(users);
    })
    .catch(err => res.status(500).json({
      errorMessage: 'unable acquire list of users'
    }))
  });
 

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Users.getById(id)
  .then(user => {
      res.status(200).json({user})
  })
  .catch(err => {
      res.status(500).json({ error: "unable to retrieve the user by id"})
  })
})

// router.get("/:id/books", (req, res) => {
//   Users.authUser(req.params.id)
//   .then(books => {
//       if (books[0]) {
//           res.status(200).json(books)
//       } else {
//           res.status(400).json({ message: "" })
//       }
//   })
//   .catch(err => res.status(500).json({ error: "There was an issue while retrieving user's books." }));
// });

  module.exports = router;



