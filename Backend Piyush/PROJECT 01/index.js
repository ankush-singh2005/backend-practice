const express=require('express');
const fs=require('fs');
const mongoose = require("mongoose");
const app=express();
const PORT=8000;

//Connection
mongoose
    .connect("mongodb://127.0.0.1:27017/youtube-app-1")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Could not connect to MongoDB",err));

//Schema
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: false
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    jobTitle:{
        type: String,
    },
    gender:{
        type: String
    },
    

});

const User = mongoose.model("user", userSchema);


//middleware
app.use(express.urlencoded({extended: false}));

app.use((req,res,next) => {
    fs.appendFile('log.txt', `\n${Date.now()}: ${req.method} ${req.url}`, (err) => {
        if(err) return next(err);
        next();
    })
})

app.use((req,res,next) => {
    // console.log("Hello from middleware 1");
    req.myUserName="Ankush.dev";
    //if we dont put this next then the next functiond s will not work and we will only see hello form middleware 1
    next();
})

app.use((req,res,next) => {
    // console.log("Hello from middleware 2");
    // console.log(req.myUserName);
    // return res.end("Hey"); //this will stop the further execution of the code
    next();
})

//we are importing all the data from mock_data and storing it inside the variable users.
const users = require('./MOCK_DATA.json');

app.get('/users', async (req,res) => {
    const allDbUsers= await User.find({});
    const html = `
        <ul> ${allDbUsers.map(user => `<li>${user.firstName} - ${user.email}</li>`).join('')} </ul>
    `
    res.send(html);
})

//REST API

app.get('/api/users', async (req,res) => {

    const allDbUsers= await User.find({})
    //always add X to custom headers
    // res.setHeader("X-myName","Ankush Singh");
    // console.log(req.headers);
    return res.json(allDbUsers);
})

// :id this is for variable or dynamic. can be anything according to the user needs
app.route("/api/users/:id")
.get(async (req,res) => {
    //here we are getting the data of a specific user with a specific id

    //doing it by mongodb
    const user = await User.findById(req.params.id);

    // const id=Number(req.params.id);
    // const user = users.find((user) => user.id === id);


    return res.json(user);
})
.patch(async (req,res) => {
    await User.findByIdAndUpdate(req.params.id, {lastName: "Changed"}); 
    return res.json({message:"success"})
})
.delete(async (req,res) => {
    await User.findByIdAndDelete(req.params.id);


    // const item=Number(req.params.id);
    // const userIndex = users.findIndex((user) => user.id===item);
    // users.splice(userIndex,1);
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    //     if(err) return res.json({status:"error"});
    //     return res.json({status:"success"});   
    // })
})

app.post("/api/users", async (req,res) => {
    //TODO: create a new user
    const body = req.body;
    //Inserting data in the mongodb server
    if(
        !body || !body.firstName || !body.email || !body.lastName || !body.jobTitle || !body.gender
    ){
        return res.status(400).json({msg:"All fields are required"});
    }
    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        jobTitle: body.jobTitle,
        gender: body.gender
    })

    return res.status(201).json({status:"success"});


    //this is for normal json file manipulation
    // users.push({...body, id: users.length + 1});
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data  ) => {

    //     return res.status(201).json({status:"success", id: users.length});
    // })
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})