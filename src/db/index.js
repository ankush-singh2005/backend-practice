import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async ()=> {
    try {
        const connectionInstance = await mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`);
        
        
        // This will ensure the database appears in MongoDB Compass
        console.log(`Connected to database: ${connectionInstance.connection.name}`);
    } catch (error) {
        console.log("MongoDB connection error",error);
        process.exit(1);
    }
}

export default connectDB;