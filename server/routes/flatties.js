const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  var knex = req.app.get('db')
  knex('flatties')
    .then(flatties =>{
      res.json(flatties)
    })
})

module.exports = router
