const express = require('express')
const router = express.Router()
const saveResourceDb = require('../db/db')
const config = require('../../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)




router.post('/', (req, res) => {
  const resource = req.body
  resource.user_id = req.user.id
  const connection = knex
  saveResourceDb.saveResources(connection, resource)
    .then(resources => {
      res.send(resources)
    })
    .catch(err => {
    })
})


module.exports = router
