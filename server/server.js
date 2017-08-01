var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

const flatties = require('./routes/flatties')

var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use('/v1/flatties', flatties)

module.exports = function(db) {
  server.set('db', db)
  return server
}
