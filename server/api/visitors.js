var express = require('express')
var router = new express.Router()
var commands = require('../database/commands')
var queries = require('../database/queries')

router.post('/', function(request, response){
  var name = request.body.name

  return queries.buildVisitorObject(name)
    .then(function(visitor){
      if(!visitor){
        return commands.addVisitor(name)
          .then(function(visitor){
            return queries.buildVisitorObject(visitor.name)
              .then(function(visitor){
                response.send(JSON.stringify({visitor}))
              })
          })
      } else {
        response.send(JSON.stringify({visitor}))
      }
    })
})

module.exports = router
