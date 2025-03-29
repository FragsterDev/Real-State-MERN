import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectionUri = process.env.MONGO_URI;

const connectDB = async () => {

    try {
        await mongoose.connect(connectionUri);
        console.log("DB Connection Successful !");
        
    } catch(error) {
        console.log("Error connecting db: ", error);
        
    }
}

export default connectDB;