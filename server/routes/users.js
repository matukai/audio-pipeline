const express = require('express');
const router = express.Router();
const User = require('../db/models/Users')

router.route('/')
.get((req,res)=>{
  return User
  .fetchAll()
  .then(result=>{
    return res.json(result)
  })
  .catch(err => {
    res.json({message: err})
  })
})

router.route('/check')
.get((req,res) => {
  if(req.user) {
    return res.json({isLoggedIn: true, userId: req.user.id, username: req.user.username})
  } else {
    return res.json({isLoggedIn: false})
  }
})

router.route('/:id')
.get((req,res) => {
  return new User ({id: req.params.id})
  .fetch()
  .then(user => {
    if(!user) {
      res.send('User does not exist')
    }
    return res.json(user)
  })
  .catch(err => {
    res.json({message: err})
  })
})
.put((req,res) => {
  if(!req.body.password | !req.body.email | !req.body.username){
    res.json('Fill in all of the required fields')
  }else {
    return new User ({id: req.params.id})
    .save({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })
    .then(userEdited => {
      return res.json(userEdited)
    })
    .catch(err => {
      res.json({message: err})
    })
  }
})
.delete((req,res) => {
  return new User ({id: req.params.id})
  .destroy()
  .then(result => {
    return res.json(result)
  })
  .catch(err => {
    res.json({message: err})
  })
})

module.exports = router;