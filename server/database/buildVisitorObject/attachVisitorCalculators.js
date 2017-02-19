var config = require('../../../knexfile')
var knex = require('knex')(config)
var queries = require('../queries')

function attachVisitorCalculators(visitor){
  return queries.getVisitorCalculators(visitor.id)
    .then(function(calculators){
      var promise = new Promise(function(resolve, reject){
        var visitorCalculators = []
        if(calculators.length < 1){ resolve() }
        calculators.forEach(function(calculator){
          return queries.getCalculatorMemory(calculator.id)
            .then(function(calculations){
              visitor[calculator.name] = calculations.map(function(calculation){
                return Number(calculation.number)
              })
              visitorCalculators.push(calculator)
              if(visitorCalculators.length === calculators.length){
                resolve()
              }
            })
        })
      })
      return promise
        .then(function(){
          return visitor
        })
    })
}

module.exports = attachVisitorCalculators
