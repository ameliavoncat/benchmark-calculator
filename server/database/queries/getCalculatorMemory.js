var config = require('../../../knexfile')
var knex = require('knex')(config)

function getCalculatorMemory(id){
  return knex.table('calculations')
    .select('*')
    .where('calculator_id', id)
    .returning('*')
}

module.exports = getCalculatorMemory
