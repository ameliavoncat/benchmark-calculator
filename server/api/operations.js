var express = require('express')
var router = new express.Router()
var path = require('path')

router.post('/', function(request, response){
  console.log('operations')
})

module.exports = router
