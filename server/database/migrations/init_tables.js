exports.up = function(knex, Promise){
  return Promise.all([
    knex.schema.createTable('visitors', function(table){
      table.increments('id').primary()
      table.string('name').unique()
    }),
    knex.schema.createTable('calculators', function(table){
      table.increments('id').primary(),
      table.integer('visitor_id').references('id').inTable('visitors'),
      table.string('name').unique()
    }),
    knex.schema.createTable('calculations', function(table){
      table.increments('id').primary()
      table.integer('calculator_id').references('id').inTable('calculators')
      table.decimal('number')
    })
  ])
}

exports.down  = function(knex, Promise){
  return Promise.all([
     knex.schema.dropTable('calculations'),
     knex.schema.dropTable('calculators'),
     knex.schema.dropTable('visitors')
   ])
}
