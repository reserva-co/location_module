// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'fec',
      user:     'root',
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'fec',
      user:     'root',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'fec',
      user:     'root',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

};
