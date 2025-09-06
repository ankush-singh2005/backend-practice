const express = require('express');
const mongoose = require('mongoose');
const PORT = 5001;
const app=express();

const BooksSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required:true
    },
    year:{
        type: Number,
        required: true
    },
    genre:{
        type: String,
        required: true
    }
});

const Books = mongoose.model("book", BooksSchema);

//middleware
app.use(express.urlencoded({extended: false}));

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/library")
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("DB connection error:", err));

//API ROUTES

//getting all the users in the form a list
app.get("/books", async (req,res) => {
    const allDbBooks = await Books.find({});
    const result =`
        <ul> ${allDbBooks.map(books => `<li> ${books.title} by ${books.author} </li>`). join('')} </ul>
    ` 
    return res.send(result);
})

app.route("/books/:id")
//putting new entry in the databse
.get(async (req,res) => {
    const book =  await Books.findById(req.params.id);

    return res.json(book);
})
.patch(async (req,res) => {
    await Books.findByIdAndUpdate(req.params.id, {author: "Ankush"});
    return res.json({message:"Success"});
})
.delete(async (req,res) => {
    await Books.findByIdAndDelete(req.params.id);
    return res.json({message:"Success"});
})

app.post("/books",async (req,res) => {
    const body = req.body;
    if(!body || !body.title || !body.author || !body.year || !body.genre)  return res.json({message: "All fields are required"});

    await Books.create({
        title:body.title,
        author: body.author,
        year:body.year,
        genre:body.genre
    })

    return res.status(201).json({message: "Added successfully"});
})


app.listen(PORT, (err) => {
    if(err) console.log("Connection error");
    console.log("Running on port number: ",PORT);
});