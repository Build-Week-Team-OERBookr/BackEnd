const express = require('express');

const db = require('../database/db-config.js');

const router = express.Router();
const Users = require("../models/users-model");
 
 // get list of users
 router.get('/', (req, res) => {
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
 

  module.exports = router;



