const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello World from the server");
});

app.get('/about',(req,res)=>{
    res.send("Hello I am from About Page");
});

app.get('/contact',(req,res)=>{
    res.send("Hello I am from Contact Page");
});

app.get('/login',(req,res)=>{
    res.send("HelloI am from Login Page");
});

app.get('/signup',(req,res)=>{
    res.send("Hello I am from Signup Page");
});

app.listen(3000,()=>{
    console.log("Server is running in 3000");
});