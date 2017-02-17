var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
var operationsRoutes = require('./api/operations')

app.use(express.static(path.resolve(__dirname + '/../browser')))
app.use(bodyParser.json())
app.use('/api/operations', operationsRoutes)

app.get('/', function(request, response){
  response.sendFile(path.resolve(__dirname + '/../browser/index.html'))
})

app.listen(3000, function(){
  console.log("Server started on port 3000.")
})
