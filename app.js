import express from "express";
import userRouter from "./routes/userRoutes.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

export const app = express();

config({
    path: "./data/config.env",
})

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Using routes
app.use("/api/v1/users" ,userRouter);



app.get("/", (req, res) => {
    res.send("Noice... Working")
})










