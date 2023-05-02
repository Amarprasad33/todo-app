import express from "express";
import mongoose from "mongoose";

const app = express();

// Database Part
mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName: "backendapi",
})
    .then(() => console.log("Database Connected -:)"))
    .catch((error) => console.log(error))

app.get("/", (req, res) => {
    res.send("Noice... Working")
})

app.get("/users/all", (req, res) => {
    res.json({
        success: true,
        users: [],
    });
})

app.listen(4000, () => {
    console.log("Server is working");
})



