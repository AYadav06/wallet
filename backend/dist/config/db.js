"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = connectDB;
const pg_1 = require("pg");
const db_1 = require("../models/db");
const client = new pg_1.Client({
    user: "postgres",
    password: "mysecretpassword",
    host: "localhost",
    port: 5432,
    database: "postgres"
});
async function connectDB() {
    try {
        await client.connect();
        console.log("DB  is connected ...");
        (0, db_1.createUserTable)();
        (0, db_1.createAccountTable)();
    }
    catch (error) {
        console.log("error while db is connection ");
        process.exit(1);
    }
}
exports.default = client;
//# sourceMappingURL=db.js.map