//require("dotenv").config({path: '/.env'});
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import connectDB from './db/index.js';
import dotenv from 'dotenv';
import app from './index.js';

dotenv.config({
    path: '/.env'
});

connectDB()
.then(() => {

    //here we are using app.on because we are using express and .on is a listener being used here for error handling
    app.on(error => {
        console.log("There is an error while connecting to the database", error);
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((error) => console.log("MongoDB connection failed: ", error));






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