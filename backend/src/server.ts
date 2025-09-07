import express from "express";
import { router } from "./routes";
import cors from "cors";
import { connectDB } from "./config/db";
import { ENV } from "./config/Env";
const app=express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/",router);


app.listen(3000,()=>{
    connectDB();
    console.log("server is running on port :3000");
})
