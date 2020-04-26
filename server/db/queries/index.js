const pgp = require("pg-promise")({});
const connectionString = "postgres://localhost:5432/sleep_tracker";
const db = pgp(connectionString);

module.exports = { db };
