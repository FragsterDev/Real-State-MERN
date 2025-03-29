import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const mongo_uri = process.env.MONGO_URI;

if (!mongo_uri) {
  console.log("Invalid mongo uri");
  process.exit(1);
}

const db = mongoose
  .connect(mongo_uri)
  .then(() => {
    console.log("Successful Connection");
  })
  .catch((err) => {
    console.log("Error:", err);
  });

const port = 3000;
const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
