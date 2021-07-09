const dotenv= require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn');

// const User = require('./model/userSchema');

app.use(express.json());

//we link the router file
app.use(require('./router/auth'));


const PORT=process.env.PORT;

// app.get('/about',middleware,(req,res) =>{
//     res.send("Hello I am from About Page");
// });

app.get('/contact',(req,res)=>{
    res.send("Hello I am from Contact Page");
});

app.get('/login',(req,res)=>{
    res.send("HelloI am from Login Page");
});

app.get('/signup',(req,res)=>{
    res.send("Hello I am from Signup Page");
});

app.listen(PORT,()=>{
    console.log(`Server is running in ${PORT}`);
});