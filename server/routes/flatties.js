const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  var knex = req.app.get('db')
  knex('flatties')
    .then(flatties =>{
      res.json(flatties)
    })
})

router.get('/shopping', (req,res) => {
  var knex = req.app.get('db')
  knex('shoppingList')
    .then(shoppingList => {
      res.json(shoppingList)
    })
})

router.post('/shopping', (req,res) => {
  var knex = req.app.get('db')
  console.log(req.body.item);
  var insert = {item: req.body.item}
  knex('shoppingList')
    .insert(insert)
    .then(shoppingList => {
      res.json(shoppingList)
    })
})

module.exports = router
