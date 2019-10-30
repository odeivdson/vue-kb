const config = require('../knexfile.js')
const knex = require('knex')(config)


knex.migrate.latest([config]) //Executa as migrations durante a inicialização do sistema

module.exports = knex