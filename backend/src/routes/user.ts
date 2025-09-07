import { Router } from "express";
import { createUser, signinUser, updateUser } from "../controllers/user";

export const userRouter=Router();

userRouter.post("/signup",createUser);
userRouter.post("/signin",signinUser);
userRouter.put("/update",updateUser);

