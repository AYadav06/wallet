import { Request, Response } from "express"
import client from "../config/db";

export const createUser=async (req:Request,res:Response)=>{
    const {username,firstname,lastname,password}=req.body;
    try{
        const createQuery='INSERT INTO users (username,firstname,lastname,password) values($1,$2,$3,$4) RETURNING id';

        const useRes=await client.query(createQuery,[username,firstname,lastname,password]);

        const userId=useRes.rows[0].id;

        res.json({
            message:"user is created",
            userId,
        })
    }
    catch(error){
     res.status(500).json({
     message:"error while signup",
     error:error 
 })
    }
}


export const signinUser=()=>{


}


export const updateUser=()=>{

}
