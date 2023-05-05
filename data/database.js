import mongoose from "mongoose";

// Database Part
export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
    dbName: "backendapi",
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((error) => console.log(error))
}