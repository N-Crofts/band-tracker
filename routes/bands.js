var express = require('express');
var router = express.Router({ mergeParams: true });
const { User } = require('../db/schema')

// INDEX, SHOW ALL
router.get('/', (req, res) => {
    User.findById(req.params.userId)
    .then((user) => {
        res.send(user.bands)
    })
})

// NEW, RENDER NEW FORM


// SHOW, SHOW ONE
router.get('/:id', (req, res) => {
    User.findById(req.params.userId)
    .then((user) => {
        res.send(user.bands.id(req.params.id))
    })
})

// EDIT, RENDER EDIT FORM


// CREATE


// UPDATE


// DELETE


module.exports = router;