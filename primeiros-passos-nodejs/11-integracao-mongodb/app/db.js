const knex = require("knex");

const db = knex({
    client: "mysql2",
    connection: {
        host: "127.0.0.1",
        user: "user",
        password: "user",
        database: "musics"
    }
});

module.exports = db;