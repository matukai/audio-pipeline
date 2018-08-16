const express = require('express');
const router = express.Router();
const Genre = require('../db/models/Genres');
const Subgenre = require('../db/models/Subgenres');

router.route('/')
.get((req,res) => {
  console.log('here')
  return Subgenre
  .fetchAll({withRelated: ['genres']})
  .then(allSubgenres => {
    return res.json(allSubgenres)
  })
  .catch(err => {
    res.json({message: err})
  })
})

let num = 0;
router.route('/:id')
.get((req,res) => {
  num = req.params.id
  console.log(num)

  console.log('here')
  return Subgenre
  .fetchAll({withRelated: ['genres']})
  .then(result => {
    
    console.log('aaaaa')
    let sub = result.models.filter(elem => {
      return elem.attributes.genre_id === parseInt(num)
    })
    console.log('this is sub', sub)
    return res.json(sub)
  })
  .catch(err => {
    res.json({message: err})
  })
})

module.exports = router;