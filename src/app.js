
// we created a server using express


const express = require("express");
const app = express();


// use of middleware
app.get("/user", (req, res,next) => {
    // we can add multiple routes handlers (middleware)  for  a single  route 
console.log('response1!')
next()
},
(req,res,next)=>{
    res.send('response2!')
    next()
},
(req,res)=>{
    console.log('response3!')
        // res.send('response3!')
}


);

app.listen(55555, () => {
    console.log('express is running');
})