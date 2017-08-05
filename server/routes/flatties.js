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
  var insert = {item: req.body.item}
  knex('shoppingList')
    .insert(insert)
    .then(shoppingList => {
      res.json(shoppingList)
    })
})

router.delete('/shopping/:id', (req, res) => {
  var knex = req.app.get('db')
  var id = req.params.id
  knex('shoppingList')
    .where('id', id)
    .del()
    .then(shoppingList => {
      res.json(shoppingList)
    })
})

router.get('/notice', (req,res) => {
  var knex = req.app.get('db')
  knex('noticeBoard')
    .join('flatties', 'flatties.id', '=', 'flattie_id')
    .then(noticeBoard => {
      res.json(noticeBoard)
    })
})

router.post('/notice', (req,res) => {
  var knex = req.app.get('db')
  var insert = {message: req.body.message}
  knex('noticeBoard')
    .insert(req.body.message)
    .then(noticeBoard => {
      res.json(noticeBoard)
    })
})

module.exports = router
