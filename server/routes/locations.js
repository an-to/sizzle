const express = require('express')
const router = express.Router()
const getLocationsDb = require('../db/db')
const saveLocationsDb = require('../db/db')
const config = require('../../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)


router.get('/', (req, res) => {
  const connection = knex
  getLocationsDb.getLocations(connection)
    .then(locations => {
      res.json(locations)
    })
})

router.post('/', (req, res) => {

  const connection = knex
  saveLocationsDb.saveLocations(connection, req.body)
    .then(locations => {
      res.send(locations)
    })
    .catch(err => {
    })
})


module.exports = router
