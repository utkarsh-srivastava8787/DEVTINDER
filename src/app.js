
// we created a server using express


const express = require("express");
const app = express();
const {auth, userAuth}= require('./middlewares/auth')


// adding auth middleware for all handlers  get, post, patch and delete 

// app.use("/admin", (req,res, next)=>{
//  const accessToken =  "xyz"   //res.body?accessToken we can use this to get the access token from api
     
//      const isAuthenticated= accessToken==="xyz"
//      if(!isAuthenticated){
//         res.status(404).send("not authorised")
//      }
//      else{
//        next()
//      }


// })
// instead of these we can create seprate folder for multiple midlewears
app.use('/admin',auth)

app.get("/admin/getData", (req, res) => {
 
    res.send("all data accessed")
});
app.get("/admin/deleteData", (req, res)=>{
    res.send("deleteData")
})
app.use("/user",userAuth,(req,res)=>{
    res.send("getting users data")
})

app.listen(55555, () => {
    console.log('express is running');
})