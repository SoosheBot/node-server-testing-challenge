// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: "postgresql://localhost/cohorts",
    migrations: {
      directory: "./data/migrations",
    },
  },
  

  testing: {
    client: 'pg',
    connection: "postgresql://localhost/testing",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations",
      tableName: 'knex_migrations'
    }
  },


  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations",
      tableName: 'knex_migrations'
    }
  }

};