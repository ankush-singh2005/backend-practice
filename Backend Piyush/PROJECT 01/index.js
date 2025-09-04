const express=require('express');
const fs=require('fs');
const app=express();
const PORT=8000;

//middleware
app.use(express.urlencoded({extended: false}));

app.use((req,res,next) => {
    fs.appendFile('log.txt', `\n${Date.now()}: ${req.method} ${req.url}`, (err) => {
        if(err) return next(err);
        next();
    })
})

app.use((req,res,next) => {
    console.log("Hello from middleware 1");
    req.myUserName="Ankush.dev";
    //if we dont put this next then the next functiond s will not work and we will only see hello form middleware 1
    next();
})

app.use((req,res,next) => {
    console.log("Hello from middleware 2");
    console.log(req.myUserName);
    // return res.end("Hey"); //this will stop the further execution of the code
    next();
})

//we are importing all the data from mock_data and storing it inside the variable users.
const users = require('./MOCK_DATA.json')
app.get('/users', (req,res) => {
    const html = `
        <ul> ${users.map(user => `<li>${user.first_name}</li>`).join('')} </ul>
    `
    res.send(html);
})

//REST API

app.get('/api/users', (req,res) => {

    //always add X to custom headers
    res.setHeader("X-myName","Ankush Singh");
    console.log(req.headers);
    return res.json(users);
})

// :id this is for variable or dynamic. can be anything according to the user needs
app.route("/api/users/:id")
.get((req,res) => {
    //here we are getting the data of a specific user with a specific id
    const id=Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})
.patch((req,res) => {
    return res.json({status:"pending"})
})
.delete((req,res) => {

    const item=Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id===item);
    users.splice(userIndex,1);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
        if(err) return res.json({status:"error"});
        return res.json({status:"success"});   
    })
})

app.post("/api/users", (req,res) => {
    //TODO: create a new user
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data  ) => {

        return res.json({status:"success", id: users.length});
    })
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})