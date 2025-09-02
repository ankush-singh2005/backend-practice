import express from 'express'
const app=express();

app.get('/api/jokes', (req, res) => {
  const joke=[
    {
        id:1,
        title:"This is 1st joke",
        content:"This is 1 content"
    },
    {
        id:2,
        title:"This is 2nd joke",
        content:"This is 2 content"
    },
    {
        id:3,
        title:"This is 3rd joke",
        content:"This is 3 content"
    },
    {
        id:4,
        title:"This is 4th joke",
        content:"This is 4 content"
    }
]
res.send(joke);
});


const port=process.env.PORT || 3000;

app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`)
})
