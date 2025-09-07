"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserTable = createUserTable;
exports.createAccountTable = createAccountTable;
const db_1 = __importDefault(require("../config/db"));
async function createUserTable() {
    const result = await db_1.default.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        firstName VARCHAR(255) UNIQUE NOT NULL,
        lastName VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );`);
    console.log(result);
}
async function createAccountTable() {
    const result = await db_1.default.query(`
        CREATE TABLE account(
        id SERIAL PRIMARY KEY,
        balance INT
        );`);
    console.log(result);
}
//# sourceMappingURL=db.js.map