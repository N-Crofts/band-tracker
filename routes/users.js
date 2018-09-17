var express = require('express');
var router = express.Router();
const { User } = require('../db/schema')


// INDEX, SHOW ALL
router.get('/', (req, res) => {
  User.find()
    .then((users) => {
      res.render('users/index', { users })
    })
})

// SHOW, SHOW ONE

// NEW, RENDER NEW FORM

// CREATE

// EDIT, RENDER EDIT FORM

// UPDATE

// DELETE



module.exports = router;
