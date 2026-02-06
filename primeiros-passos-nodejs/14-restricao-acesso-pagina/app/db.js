const knex = require("knex");

const db = knex({
    client: "mysql2",
    connection: {
        user: "heitor",
        password: "heitor",
        database: "autenticacao"
    }
});

module.exports = db;