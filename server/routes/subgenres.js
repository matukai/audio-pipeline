const express = require('express');
const router = express.Router();
const Genre = require('../db/models/Genres');
const Subgenre = require('../db/models/Subgenres');

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



module.exports = router;