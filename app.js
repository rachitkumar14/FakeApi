
require('dotenv').config();
const express=require('express');
const connectedToDb= require('./config/db')
const cors=require('cors');
const userRoutes=require('./userRouter.js');
const app=express();
app.use(cors())
connectedToDb();

app.use('/',userRoutes);

// app.get('/about',(req,res)=>{
//     res.send("About Page")
// })
module.exports=app;