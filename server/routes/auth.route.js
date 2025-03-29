import express from 'express';
import userSignup from '../controller/auth.controller.js';


const authRouter = express.Router();

authRouter.post("/signup", userSignup);

export default authRouter;