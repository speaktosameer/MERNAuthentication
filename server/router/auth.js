const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Hello World from the server Router");
});

router.post('/register',(req,res)=>{
    console.log(req.body);
    res.json({message:req.body});
    // response.send("mera register page");
})

module.exports = router;