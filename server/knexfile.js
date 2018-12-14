// Update with your config settings.

const database = require('./config');
const path = require('path');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : database.development.user,
      password : database.development.password,
      database : database.development.database,
      charset: 'utf8'
    },
    migrations: {
      directory: path.join(__dirname + '/db/migrations'),
    },
    seeds: {
      directory: path.join(__dirname + '/db/seeds')
    },
    debug: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'database.production.database',
      user:     'database.production.user',
      password: 'database.production.password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
