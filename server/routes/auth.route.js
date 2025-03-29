import express from 'express';
import auth from '../controller/auth.controller.js';

const authRouter = express.Router();

authRouter.post("/signup", auth);

export default authRouter;