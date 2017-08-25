const express = require('express')
const router = express.Router()
const getIngredientsDb = require('../db/db')
const saveIngredientsDb = require('../db/db')
const config = require('../../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)


router.get('/', (req, res) => {
  const connection = knex
  getIngredientsDb.getIngredients(connection)
    .then(ingredients => {
      res.json(ingredients)
    })
})

router.post('/', (req, res) => {

  const connection = knex
  saveIngredientsDb.saveIngredients(connection, req.body)
    .then(ingredients => {
      res.send(ingredients)
    })
    .catch(err => {
    })
})


module.exports = router
