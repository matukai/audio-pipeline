const express = require('express');
const router = express.Router();
const Genre = require('../db/models/Genres');
const Subgenre = require('../db/models/Subgenres');
const Thread = require('../db/models/Threads');

router.route('/')
.get((req,res) => {
  return Subgenre
  .fetchAll({withRelated: ['genres']})
  .then(allSubgenres => {
    return res.json(allSubgenres)
  })
  .catch(err => {
    res.json({message: err})
  })
})

router.route('/:id')
.get((req,res) => {
  let num = req.params.id;
  return Thread
  .fetchAll({withRelated: ['subgenres']})
  .then(result => {
    let threads = result.models.filter(elem => {
      return elem.attributes.subgenre_id === parseInt(num);
    })
    return res.json(threads)
  })
  .catch(err => {
    res.json({message: err})
  })
})

module.exports = router;