var config = require('../../knexfile')
var knex = require('knex')(config)
var commands = require('./commands')

function getCalculatorId(visitor_id, name){
  return knex.table('calculators')
    .select('id')
    .where({visitor_id, name})
    .returning('id')
    .then(function(result){
      return result[0].id
    })
}

function getVisitor(name){
  return knex.table('visitors')
    .select('*')
    .where({name})
    .returning('*')
    .then(function(result){
      return result[0]
    })
}

function getVisitorCalculators(id){
  return knex.table('calculators')
    .select('*')
    .where('visitor_id', id)
    .returning('*')
}

function getCalculatorMemory(id){
  return knex.table('calculations')
    .select('*')
    .where('calculator_id', id)
    .returning('*')
}

function buildVisitorObject(name){
  return getVisitor(name)
    .then(function(visitor){
      if(!visitor) {
        return commands.addVisitor(name)
          .then(function(visitor){
            return getVisitorCalculators(visitor.id)
              .then(function(calculators){
                var promise = new Promise(function(resolve, reject){
                  var visitorCalculators = []
                  calculators.forEach(function(calculator){
                    return getCalculatorMemory(calculator.id)
                      .then(function(calculations){
                        visitor[calculator.name] = calculations.map(function(calculation){
                          return calculation.number
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
          })
      } else {
        return getVisitorCalculators(visitor.id)
          .then(function(calculators){
            var promise = new Promise(function(resolve, reject){
              var visitorCalculators = []
              if(calculators.length < 1){ resolve() }
              calculators.forEach(function(calculator){
                return getCalculatorMemory(calculator.id)
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
    })
}

module.exports = {
  buildVisitorObject,
  getCalculatorId
}
