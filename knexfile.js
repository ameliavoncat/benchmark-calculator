module.exports = {
  client: 'pg',
  connection:`postgres://${process.env.USER}@localhost:5432/calculator-db`,
  migrations: {
    directory: __dirname + '/server/database/migrations',
    tableName: 'migrations'
  }
}
