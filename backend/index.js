const express =require('express');
const notes=require('./data/notes');
const dotenv=require('dotenv');

const app=express();
dotenv.config();

app.get('/',(req,res)=>{
     res.send('API is running')
})
app.get('/api/notes',(req,res)=>{
     res.json(notes)
})
app.get('/api/notes/:id',(req,res)=>{
  const noteid=notes.find((n)=>n._id===req.params.id)
  console.log(req.params)
     res.send(noteid)
})

const PORT=process.env.PORT || 5000 
app.listen(5000,console.log(`the server is running on ${PORT}`))