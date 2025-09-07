import {Client}  from "pg";
import { ENV } from "./Env";
import { createAccountTable, createUserTable } from "../models/db";
const client =new Client ({
    user:"postgres",
    password:"mysecretpassword",
    host:"localhost",
    port:5432,
    database:"postgres"
});
export async function connectDB() {
    try {
        await client.connect();
        console.log("DB  is connected ..."); 
        createUserTable();
        createAccountTable();
    } 
    catch (error){
        console.log("error while db is connection ",error);
        
    }
}
export default client;