var express = require('express')
var router = new express.Router()
var commands = require('../database/commands')
var queries = require('../database/queries')

router.post('/plus', function(request, response){
  var {a, b, visitor_id, name} = request.body
  var result = Number(a) + Number(b)

  return queries.getCalculatorId(visitor_id, name)
    .then(function(calculator_id){
      return commands.addCalculation(calculator_id, result)
        .then(function(){
          response.send(JSON.stringify({result}))
        })
    })
})

router.post('/minus', function(request, response){
  var {a, b, visitor_id, name} = request.body
  var result = Number(a) - Number(b)

  return queries.getCalculatorId(visitor_id, name)
    .then(function(calculator_id){
      return commands.addCalculation(calculator_id, result)
        .then(function(){
          response.send(JSON.stringify({result}))
        })
    })
  })

router.post('/divide', function(request, response){
  var {a, b, visitor_id, name} = request.body
  var result = Number(a) / Number(b)

  return queries.getCalculatorId(visitor_id, name)
    .then(function(calculator_id){
      return commands.addCalculation(calculator_id, result)
        .then(function(){
          response.send(JSON.stringify({result}))
        })
    })
})

router.post('/times', function(request, response){
  var {a, b, visitor_id, name} = request.body
  var result = Number(a) * Number(b)

  return queries.getCalculatorId(visitor_id, name)
    .then(function(calculator_id){
      return commands.addCalculation(calculator_id, result)
        .then(function(){
          response.send(JSON.stringify({result}))
        })
    })
})

router.post('/modulo', function(request, response){
  var {a, b, visitor_id, name} = request.body
  var result = Number(a) % Number(b)

  return queries.getCalculatorId(visitor_id, name)
    .then(function(calculator_id){
      return commands.addCalculation(calculator_id, result)
        .then(function(){
          response.send(JSON.stringify({result}))
        })
    })
})

module.exports = router
