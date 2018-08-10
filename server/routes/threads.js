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
.post((req,res) => {
  return new Thread ({
    body: req.body.body,
    user_id: req.body.user_id,
    subgenre_id: req.body.subgenre_id
  })
  .save()
  .then(newThread => {
    return res.json(newThread)
  })
  .catch(err => {
    res.json({message: err})
  })
})

router.route('/:id')
.get((req,res) => {

  return new Thread ({id: req.params.id})
  .fetch()
  .then(thread => {
    if(!thread) {
      res.send('Thread does not exist')
    }
    return res.json(thread)
  })
  .catch(err => {
    res.json({message: err})
  })
})
.put((req,res) => {
  if(!req.body.body){
    res.json('Fill in all of the required fields')
  }else {
    return new Thread ({id: req.params.id})
    .save({
      body: req.body.body
    })
    .then(threadEdited => {
      return res.json(threadEdited)
    })
    .catch(err => {
      res.json({message: err})
    })
  }
})
.delete((req,res) => {
  return new Thread ({id: req.params.id})
  .destroy()
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