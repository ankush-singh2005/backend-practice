const mongoose = require("mongoose");

async function connectDB(url){
    try {
        await mongoose.connect(url);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Could not connect to MongoDB",error);
    }
}

module.exports = connectDB;

// mongoose
//     .connect("mongodb://127.0.0.1:27017/youtube-app-1")
//     .then(() => console.log("Connected to MongoDB"))
//     .catch((err) => console.log("Could not connect to MongoDB",err));