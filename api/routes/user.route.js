import express from "express";
import { test } from "../controller/user.controller";

const userRouter = express.Router();

userRouter.get("/test", test);

export default userRouter;
