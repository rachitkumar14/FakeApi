const app=require('./app.js')
// const express = require('express');
const PORT= process.env.PORT || 3000
// const app=express();

app.listen(PORT,()=>{
    console.log(`Server connected successfully at ${PORT}`)
})