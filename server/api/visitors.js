var express = require('express')
var router = new express.Router()
var inserts = require('../database/inserts')
var buildVisitorObject = require('../database/buildVisitorObject')

router.post('/', function(request, response){
  var name = request.body.name

  return buildVisitorObject(name)
    .then(function(visitor){
      if(!visitor){
        return inserts.addVisitor(name)
          .then(function(visitor){
            return buildVisitorObject(visitor.name)
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
