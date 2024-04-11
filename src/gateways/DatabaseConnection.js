const knex = require('knex');
const { attachPaginate } = require('knex-paginate')

const client = knex({
    client: 'pg',
    connection: {
        user: 'postgres',
        password: 'user',
        host: 'localhost',
        database: 'postgres',
        port: 5433
    }
})

attachPaginate()

module.exports = client