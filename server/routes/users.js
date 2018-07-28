const express = require('express');
const Users = require('../db/models/Users')
const router = express.Router();


router.route('/')
.get((req,res)=>{
  console.log('hitting route')
  return Users
  .fetchAll()
  .then(result=>{
    return res.json(result)
  })
})

module.exports = router;