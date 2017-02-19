var config = require('../../../knexfile')
var knex = require('knex')(config)

function addVisitor(name){
  return knex.table('visitors')
    .insert({name})
    .returning('*')
    .then(function(result){
      return result[0]
    })
}

module.exports = addVisitor
