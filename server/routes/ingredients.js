const express = require('express')
const router = express.Router()
const getIngredientsDb = require('../db/db')
const saveIngredientsDb = require('../db/db')


router.get('/', (req, res) => {
  let db =req.app.get('db')
  getIngredientsDb.getIngredients('db')
    .then(ingredients => {
      res.json(ingredients)
    })
})

router.post('/', (req, res) => {

  let db = req.app.get('db')
  saveIngredientsDb.saveIngredients(db, req.body)
    .then(ingredients => {
      res.send(ingredients)
    })
    .catch(err => {
    })
})


module.exports = router
