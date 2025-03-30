import connectDB from "./utils/dbConnect.js";
import express from "express";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import dotenv from 'dotenv';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use(errorMiddleware);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});