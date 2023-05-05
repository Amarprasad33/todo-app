import express, { text } from "express";
import userRouter from "./routes/userRoutes.js";
import taskRouter from "./routes/task.js";

import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
    path: "./data/config.env",
})

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

// Using routes
app.use("/api/v1/users" ,userRouter);
app.use("/api/v1/tasks" ,taskRouter);


app.get("/", (req, res) => {
    res.send("Noice... Working")
})

app.use(errorMiddleware);










