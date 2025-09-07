"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountRouter = void 0;
const express_1 = __importDefault(require("express"));
const account_1 = require("../controllers/account");
exports.accountRouter = (0, express_1.default)();
exports.accountRouter.get("/balance", account_1.getBalance);
exports.accountRouter.post("/transfer", account_1.transferBalance);
//# sourceMappingURL=account.js.map