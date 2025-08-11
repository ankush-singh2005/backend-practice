//require("dotenv").config({path: '/.env'});
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import connectDB from './db/index.js';
import dotenv from 'dotenv';

dotenv.config({
    path: '/.env'
});

connectDB()






// import express from 'express';
// const app = express();
// (async () => {                     //()() is used to immmediately invoke a function. and when using ifes we start it with a ; 
//     try {                           //havent used it here tho
//         await mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`);
//         console.log("Database connected");

//         //we are using app.on because we are using express and .on is a listener being used here for error handling
//         app.on("error", ()=> {
//             console.log("Server error", error);
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log(error);
//     }
// })()