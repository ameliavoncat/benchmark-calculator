var config = require('../../../knexfile')
var knex = require('knex')(config)

function getCalculatorId(visitor_id, name){
  return knex.table('calculators')
    .select('id')
    .where({visitor_id, name})
    .returning('id')
    .then(function(result){
      return result[0].id
    })
}

module.exports = getCalculatorId
