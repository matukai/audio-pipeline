const express = require('express');
const router = express.Router();
const Comment = require('../db/models/Comment');
const Thread = require('../db/models/Threads');
const User = require('../db/models/Users');

router.route('/')
.get((req,res) => {
  return Comment
  .fetchAll({withRelated: ['threads']})
  .then(allComments => {
    return res.json(allComments)
  })
  .catch(err => {
    res.json({message: err})
  })
})
.post((req,res) => {
  return new Comment ({
    body: req.body.body,
    thread_id: 27,
    user_id: req.user.id
  })
  .save()
  .then(newComment => {
    return res.json(newComment)
  })
  .catch(err => {
    res.json({message: err})
  })
})

module.exports = router;