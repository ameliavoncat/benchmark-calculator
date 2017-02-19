var config = require('../../../knexfile')
var knex = require('knex')(config)

function addCalculator(visitor_id, name){
  return knex.table('calculators')
    .insert({visitor_id, name})
    .returning('*')
    .then(function(result){
      return result[0]
    })
}

module.exports = addCalculator
