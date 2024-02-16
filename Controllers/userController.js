

exports.home=(req,res)=>{
    res.send('Hello World');
}
exports.createUser= async(req,res)=>{
    const User = require('../Models/userModel.js');
    try{
        const {name,email} = req.body;
        const user= await User.create({
            name , 
            email
        })
        res.status(201).json({
            success:true,
            message:"User created Successfully",user
        })
    }
    catch(err){
        console.log("error in creating user")
        res.status(501).json({
            success:false,
            message:err.message
        })
    }
}