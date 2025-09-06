const fs=require('fs');

function logReqRes(filename){
    return (req,res,next) => {
        fs.appendFile(filename, `\n${Date.now()}: ${req.method} ${req.url}`, (err) => {
        if(err) return next(err);
        next();
    })
    }
}

module.exports={logReqRes};



// app.use((req,res,next) => {
//     // console.log("Hello from middleware 1");
//     req.myUserName="Ankush.dev";
//     //if we dont put this next then the next functiond s will not work and we will only see hello form middleware 1
//     next();
// })

// app.use((req,res,next) => {
//     // console.log("Hello from middleware 2");
//     // console.log(req.myUserName);
//     // return res.end("Hey"); //this will stop the further execution of the code
//     next();
// })