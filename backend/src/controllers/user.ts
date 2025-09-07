import { Request, Response } from "express"
import client from "../config/db";
import jwt from "jsonwebtoken";
import { ENV } from "../config/Env";

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
export const signinUser=async (req:Request,res:Response)=>{
const {username,password}=req.body;
try{
const result=await client.query('SELECT * FROM users WHERE username=$1',[username]);


if(result.rows.length === 0){
    res.status(401).json({
        message:"User not found"
    });
}

const user=result.rows[0];
console.log(user);

if(password === user.password ){
    const token=jwt.sign({
   id:user.id,
   username:user.username
    },ENV.JWT_SECRET as string,{expiresIn:"21d"});
  
    res.cookie("auth_token",token,{
     httpOnly:true,
     secure:false,
     sameSite:"lax",
     maxAge:24*60*60*1000*21
    })
    res.json({
        message:"you are signin.."
    })
}
}
catch(error){
    console.log("error while signin",error);
    res.status(401).json({
        message:"Error in signin",
        error:error
    })
}
}
export const updateUser=()=>{

}
