 

 const express = require('express');
//  const app=express();
 const {home,createUser}=require('./Controllers/userController.js')

 const router=express.Router();
 router.get('/',home);
 router.post('/createUser',createUser);
 module.exports=router