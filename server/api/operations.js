var express = require('express')
var router = new express.Router()
var path = require('path')

router.post('/plus', function(request, response){
  var {a, b} = request.body
  var result = Number(a) + Number(b)

  response.send(JSON.stringify({result}))
})

router.post('/minus', function(request, response){
  var {a, b} = request.body
  var result = Number(a) - Number(b)

  response.send(JSON.stringify({result}))
})

router.post('/divide', function(request, response){
  var {a, b} = request.body
  var result = Number(a) / Number(b)

  response.send(JSON.stringify({result}))
})

router.post('/times', function(request, response){
  var {a, b} = request.body
  var result = Number(a) * Number(b)

  response.send(JSON.stringify({result}))
})

router.post('/modulo', function(request, response){
  var {a, b} = request.body
  var result = Number(a) % Number(b)

  response.send(JSON.stringify({result}))
})

module.exports = router
