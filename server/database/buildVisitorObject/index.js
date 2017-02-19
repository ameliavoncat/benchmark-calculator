var config = require('../../../knexfile')
var knex = require('knex')(config)
var inserts = require('../inserts')
var queries = require('../queries')
var attachVisitorCalculators = require('./attachVisitorCalculators')

function buildVisitorObject(name){
  return queries.getVisitor(name)
    .then(function(visitor){
      if(!visitor) {
        return inserts.addVisitor(name)
          .then(function(visitor){
            return attachVisitorCalculators(visitor)
          })
      } else {
        return attachVisitorCalculators(visitor)
      }
    })
}

module.exports = buildVisitorObject
