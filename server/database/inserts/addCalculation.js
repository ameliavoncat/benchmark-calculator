var config = require('../../../knexfile')
var knex = require('knex')(config)

function addCalculation(calculator_id, number){
  return knex.table('calculations')
    .insert({calculator_id, number})
    .returning('*')
    .then(function(result){
      return result[0]
    })
}

module.exports = addCalculation
