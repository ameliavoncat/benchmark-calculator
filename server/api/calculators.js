var express = require('express')
var router = new express.Router()
var inserts = require('../database/inserts')

router.post('/', function(request, response){
  var {visitor_id, name} = request.body

  return inserts.addCalculator(visitor_id, name)
    .then(function(calculator){
      response.send(JSON.stringify({calculator}))
    })
})

module.exports = router
