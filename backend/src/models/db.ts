import client from "../config/db";

export async function createUserTable(){
    const result=await client.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        firstName VARCHAR(255) UNIQUE NOT NULL,
        lastName VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );`)
        console.log(result);
}
 export async function createAccountTable(){
    const result=await client.query(`
        CREATE TABLE account(
        id SERIAL PRIMARY KEY,
        balance INT
        );`)
        console.log(result);
}


