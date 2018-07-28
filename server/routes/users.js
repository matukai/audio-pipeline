const express = require('express');
const router = express.Router();
const Users = require('../db/models/Users')

router.route('/')
.get((req,res)=>{
  return Users
  .fetchAll()
  .then(result=>{
    return res.json(result)
  })
})
.post((req,res) => {
  return new Users ({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  })
  .save()
  .then(newUser => {
    return res.json(newUser);
  })
  .catch(err => {
    res.json({message: err})
  })
})



module.exports = router;