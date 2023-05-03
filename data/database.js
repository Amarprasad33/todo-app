import mongoose from "mongoose";

// Database Part
export const connectDB = () => {
    mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName: "backendapi",
    })
    .then(() => console.log("Database Connected -:)"))
    .catch((error) => console.log(error))
}