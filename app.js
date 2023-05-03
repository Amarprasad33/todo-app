import express from "express";
import userRouter from "./routes/userRoutes.js";


const app = express();
// const router = express.Router();

// Middlewares
app.use(express.json());
app.use("/users" ,userRouter);



app.get("/", (req, res) => {
    res.send("Noice... Working")
})





app.listen(4000, () => {
    console.log("Server is working");
})



