var config = require('../../../knexfile')
var knex = require('knex')(config)

function getVisitor(name){
  return knex.table('visitors')
    .select('*')
    .where({name})
    .returning('*')
    .then(function(result){
      return result[0]
    })
}

module.exports = getVisitor
