const express = require('express')
const router = express.Router()
const getUsersDb = require('../db/db')
const saveUserDb = require('../db/db')


router.get('/', (req, res) => {
  let db =req.app.get('db')
  getUsersDb.getUsers('db')
    .then(users => {
      res.json(users)
    })
})

router.post('/', (req, res) => {
  
  let db = req.app.get('db')
  saveUserDb.saveUser(db, req.body)
    .then(users => {
      res.send(users)
    })
    .catch(err => {
    })
})


module.exports = router
