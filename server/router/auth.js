const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');


require('../db/conn');
const User =require('../model/userschema');

router.get('/',(req,res)=>{
    res.send("Hello World from the server Router");
});

//Using Promises

// router.post('/register', (req,res)=>{

//     const {name,email,phone,work,password,cpassword }=req.body;

//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error : "Please filled it properly"});
//     }

//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error : "Email already exist"});
//         }
//         const user= new User({name,email,phone,work,password,cpassword })
//         user.save().then(()=>{
//             res.status(201).json({message:"User suceesfully"});
//         }).catch((err)=> res.status(500).json({error:"Failed to register"}));
//     }).catch(err=>{console.log(err);});
// });


//Async -await      

router.post('/register', async (req,res)=>{

    const {fname,lname,email,phone,password,cpassword,prof }=req.body;

    if(!fname || !lname || !email || !phone|| !password || !cpassword || !prof){
        return res.status(422).json({error : "Please filled it properly"});
    }

    try{
        const userExist =await User.findOne({email:email});

        if(userExist){
            return res.status(422).json({error : "Email already exist"});
        } else if(password != cpassword){
            return res.status(422).json({error : "Passsword not matching"});
        }else{
            const user = new User({fname,lname,email,phone,password,cpassword,prof });
            //password encrypting

        await user.save();
        
        res.status(201).json({message:"User suceesfully"});
        }

    } catch(err){
        console.log(err);
    }
    
});

//Login Route

router.post('/signin',async (req,res) =>{
    try{
        let token;
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({error:"Please Filled data"});
        }

        const userLogin = await User.findOne({email:email});

        // console.log(userLogin);
        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            });

            if(!isMatch){
                res.status(400).json({error:"Invalid credential"});
            }else{
                res.json({message:"user signin Successfully"});
            }
            
        }else{
            res.status(400).json({error:"Invalid credential"});
        }

        

    }catch(err){
        console.log(err);
    }
})


module.exports = router;