var config = require('../../knexfile')
var knex = require('knex')(config)

function addVisitor(name){
  return knex.table('visitors')
    .insert({name})
    .returning('*')
    .then(function(result){
      return result[0]
    })
}

function addCalculator(visitor_id, name){
  return knex.table('calculators')
    .insert({visitor_id, name})
    .returning('*')
    .then(function(result){
      return result[0]
    })
}

function addCalculation(calculator_id, number){
  return knex.table('calculations')
    .insert({calculator_id, number})
    .returning('*')
    .then(function(result){
      return result[0]
    })
}

module.exports = {
  addVisitor,
  addCalculator,
  addCalculation
}
