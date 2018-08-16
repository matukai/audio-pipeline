const express = require('express');
const router = express.Router();
const Genre = require('../db/models/Genres');

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

module.exports = router;