var config = require('../../../knexfile')
var knex = require('knex')(config)

function getVisitorCalculators(id){
  return knex.table('calculators')
    .select('*')
    .where('visitor_id', id)
    .returning('*')
}

module.exports = getVisitorCalculators
