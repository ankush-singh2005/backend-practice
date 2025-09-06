const express=require('express');



const connectDB = require('./connection.js')
const {logReqRes} = require('./middlewares/index.js');
const userRouter = require('./routes/user.js');

const app=express();
const PORT=8000;

//Connection
connectDB("mongodb://127.0.0.1:27017/youtube-app-1");

//middleware
app.use(express.urlencoded({extended: false}));
app.use(logReqRes('log.txt'));


//routes
app.use('/users', userRouter);

//listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})