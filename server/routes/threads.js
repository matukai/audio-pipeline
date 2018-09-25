const express = require('express');
const router = express.Router();
const Thread = require('../db/models/Threads');
const Subgenre = require('../db/models/Subgenres');
const Genre = require('../db/models/Genres');
const Users = require('../db/models/Users');
const Comment = require('../db/models/Comment');
const { isAuthenticated } = require('./helper');

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
.post(isAuthenticated, (req,res) => {
  return new Thread ({
    body: req.body.body,
    title: req.body.title,
    user_id: req.user.id,
    subgenre_id: 1
  })
  .save()
  .then(newThread => {
    return res.json(newThread)
  })
  .catch(err => {
    res.json({message: err})
  })
})

router.route('/recent')
.get((req,res) => {
  return Thread
  .fetchAll({withRelated: ['subgenres','users']})
  .then(result => {
    result = result.models.reverse().slice(0,5)
    return res.json(result)
  })
  .catch(err => {
    res.json({message: err})
  })
})

router.route('/:id')
.get((req,res) => {
  // isAuthorized(req.user.id, req.params.id)
  return new Thread ({id: req.params.id})
  .fetch({withRelated: ['comments']})
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
.put(isAuthenticated, (req,res) => {
  let user = null;
  if(!req.body.body){
    res.json('Fill in all of the required fields')
  }else {
    return new Thread ({id: req.params.id})
    .fetch()
    .then(result => {
      user = result.attributes.user_id;
      
      if(req.user.id === user) {
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
      } else {
        return res.json('this is not your thread')
      }
    })
    .catch(err => {
      res.json({message: err})
    })
  }
})
.delete(isAuthenticated,(req,res) => {
  //var user is the thread owner
  //You can delete only threads posted by user logged in (req.user.id) which is decorated from passport 
  let user = null;
  return new Thread ({id: req.params.id})
  .fetch()
  .then(result => {
    user = result.attributes.user_id;
    if(req.user.id === user) {
      return new Thread ({id: req.params.id})
      .destroy()
      .then(result => {
        return res.json(result)
      })
    }else {
      return res.json('this is not your thread')
    }
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