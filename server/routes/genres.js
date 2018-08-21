const express = require('express');
const router = express.Router();
const Genre = require('../db/models/Genres');
const Subgenre = require('../db/models/Subgenres');


router.route('/')
.get((req,res) => {
  return Genre
  .fetchAll()
  .then(allGenres => {
    return res.json(allGenres)
  })
  .catch(err => {
    res.json({message: err})
  })
})

let num = 0;
router.route('/:id')
.get((req,res) => {
  num = req.params.id
  return Subgenre
  .fetchAll({withRelated: ['genres']})
  .then(result => {
    let sub = result.models.filter(elem => {
      return elem.attributes.genre_id === parseInt(num)
    })
    return res.json(sub)
  })
  .catch(err => {
    res.json({message: err})
  })
})

module.exports = router;