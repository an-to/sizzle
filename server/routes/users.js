const express = require('express')
const router = express.Router()

// const db = require('../db/db')


router.get('/', (req, res) => {
  db.getUsers()
    .then(data => {
      res.json(data)
    })
})
router.post('/', (req,res) => {
  let user = {title:req.body.title, paragraphs: JSON.stringify([req.body.paragraphs]) }
  db.addPost(user)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
    })
})

module.exports = router
