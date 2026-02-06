const knex = require("knex");

const db = knex({
    client: "mysql2",
    connection: {
        user: "user",
        password: "user",
        database: "autenticacao"
    }
});

module.exports = db;