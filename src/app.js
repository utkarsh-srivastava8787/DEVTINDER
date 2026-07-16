
// we created a server using express
// mogoose pswd: 5eD2YcdfWkEV54cK

const dbConnect = require("./database/database.js")
const express = require("express");
const app = express();
const {auth, userAuth}= require('./middlewares/auth')
  


 dbConnect().then(()=>{

console.log('Databae connection established....');
app.listen(55555, () => {
    console.log('express is running');
})
}).catch(err=>{
    console.error("mongoose are not connected ")})
