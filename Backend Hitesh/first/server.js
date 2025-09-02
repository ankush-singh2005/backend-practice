//when doing import the type inside package.json should be module
//and when doing require the type is the default one that is commonjs
import express from 'express';



const app=express();
app.get('/', (req,res) => {
    res.send("We are here")
});

app.get('/jokes', (req,res)=>{
    const jokes=[
        {
            id:1,
            title: "This is 1st joke",
            content: "Content for the 1 jokes"
        },
        {
            id:2,
            title: "This is 2nd joke",
            content: "Content for the 2 jokes"
        },
        {
            id:3,
            title: "This is 3rd joke",
            content: "Content for the 3 jokes"
        },
        {
            id:4,
            title: "This is 4th joke",
            content: "Content for the 4 jokes"
        }
    ]
    res.send(jokes);
})

let port= process.env.PORT || 3000

app.listen(port, ()=> {
    console.log(`Server started at port number ${port}`)
});