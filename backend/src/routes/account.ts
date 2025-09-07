import Router from "express";
import { createUser, signinUser, updateUser } from "../controllers/user";
import { getBalance, transferBalance } from "../controllers/account";

export const accountRouter=Router();

accountRouter.get("/balance",getBalance);
accountRouter.post("/transfer",transferBalance);






