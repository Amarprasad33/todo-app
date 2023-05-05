import express from "express";
import userRouter from "./routes/userRoutes.js";
import { config } from "dotenv";

export const app = express();

config({
    path: "./data/config.env",
})

// Middlewares
app.use(express.json());

// Using routes
app.use("/users" ,userRouter);



app.get("/", (req, res) => {
    res.send("Noice... Working")
})










