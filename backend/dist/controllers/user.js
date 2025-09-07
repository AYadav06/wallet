"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.signinUser = exports.createUser = void 0;
const db_1 = __importDefault(require("../config/db"));
const createUser = async (req, res) => {
    const { username, firstname, lastname, password } = req.body;
    try {
        const createQuery = 'INSERT INTO users (username,firstname,lastname,password) values($1,$2,$3,$4) RETURNING id';
        const useRes = await db_1.default.query(createQuery, [username, firstname, lastname, password]);
        const userId = useRes.rows[0].id;
        res.json({
            message: "user is created",
            userId,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "error while signup",
            error: error
        });
    }
};
exports.createUser = createUser;
const signinUser = () => {
};
exports.signinUser = signinUser;
const updateUser = () => {
};
exports.updateUser = updateUser;
//# sourceMappingURL=user.js.map