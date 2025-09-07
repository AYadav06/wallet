"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_1 = require("../controllers/user");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post("/signup", user_1.createUser);
exports.userRouter.post("/signin", user_1.signinUser);
exports.userRouter.put("/update", user_1.updateUser);
//# sourceMappingURL=user.js.map