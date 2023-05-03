import mongoose from "mongoose";

// Database Part
export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
    dbName: "backendapi",
    })
    .then(() => console.log("Database Connected -:)"))
    .catch((error) => console.log(error))
}