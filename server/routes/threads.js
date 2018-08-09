const express = require('express');
const router = express.Router();
const Thread = require('../db/models/Threads');
const Subgenre = require('../db/models/Subgenres');
const Genre = require('../db/models/Genres');
const Users = require('../db/models/Users');

router.route('/')
.get((req,res) => {
  return Thread
  .fetchAll({withRelated: ['subgenres','users']})
  .then(result => {
    return res.json(result)
  })
  .catch(err => {
    res.json({message: err})
  })
})

router.route('/user/:id')
.get((req,res) => {
  return new Thread()
  .where({user_id: req.params.id})
  .fetchAll()
  .then(result => {
    return res.json(result)
  })
  .catch(err => {
    res.json({message: err})
  })
})

router.route('/subgenre/:id')
.get((req,res) => {
  return new Thread()
  .where({subgenre_id: req.params.id})
  .fetchAll()
  .then(result => {
    return res.json(result)
  })
  .catch(err => {
    res.json({message: err})
  })
})

module.exports = router;