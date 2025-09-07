"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.signinUser = exports.createUser = void 0;
const db_1 = __importDefault(require("../config/db"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Env_1 = require("../config/Env");
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
const signinUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await db_1.default.query('SELECT * FROM users WHERE username=$1', [username]);
        if (result.rows.length === 0) {
            res.status(401).json({
                message: "User not found"
            });
        }
        const user = result.rows[0];
        console.log(user);
        if (password === user.password) {
            const token = jsonwebtoken_1.default.sign({
                id: user.id,
                username: user.username
            }, Env_1.ENV.JWT_SECRET, { expiresIn: "21d" });
            res.cookie("auth_token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: 24 * 60 * 60 * 1000 * 21
            });
            res.json({
                message: "you are signin.."
            });
        }
    }
    catch (error) {
        console.log("error while signin", error);
        res.status(401).json({
            message: "Error in signin",
            error: error
        });
    }
};
exports.signinUser = signinUser;
const updateUser = () => {
};
exports.updateUser = updateUser;
//# sourceMappingURL=user.js.map