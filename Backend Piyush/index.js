const express=require("express");


//express is basically :- app.METHOD(PATH, HANDLER)

const app=express();
app.get('/', (req,res) => {
    res.send('Hello from the home page');
})

app.get('/about', (req,res) => {
    res.send(`Hi ${req.query.name} welcome to the about page`);
})

app.listen(8000, () => {
    console.log('Server is running on port 3000');
})


//only for making the server function by ourself
// const http=require("http");
// const url=require("url");
// const fs=require("fs");


// function myHandler(req,res){

//     //req.headers gives the info about the request ie the client making the request
    
//     //with the help of this code we are creatung a log file that will store the data
//     //of all users who enter the server
//     const log=`${Date.now()}: ${req.url} ${req.method} New Request Received\n`
    
//     //dont print favicon.io on the log.txt file
//     const myUrl=url.parse(req.url, true);
//     if (myUrl.pathname === "/favicon.ico") {
//         res.writeHead(204); // No Content
//         return res.end();
//     }
//     console.log(myUrl);
//     fs.appendFile('log.txt',log,  (err,data) => {
//         switch(myUrl.pathname){
//             case '/':
//                 if(req.method === 'GET'){
//                     res.end('Home Page');
//                 }
//                 break;
//             case '/about':
//                 const user=myUrl.query.name;
    
//                 res.end(`Hi ${user} welcome to the about page`);
//                 break;
//             case '/contact':
//                 res.end('Contact Page');
//                 break;
//             case '/signup':
//                 if(req.method==='GET') res.end("You are the sign up form");
//                 else if(req.method==='POST'){
//                     //DB query
//                     res.end("Success");
//                 }
//                 break;
//             default:
//                 res.end('404 Page Not Found');
//                 break;
//         }
//     });
// }

// const myServer = http.createServer(app);

// //now in order to run the server we need a port
// //port is basically like a door. as a house has many doors but we ebter from only one door similarly here we enter from only one port. 

// myServer.listen(8000, () => {
//     console.log("server is listening on port 8000");
// });
