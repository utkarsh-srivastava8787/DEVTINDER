
// we created a server using express
// mogoose pswd: 5eD2YcdfWkEV54cK

const dbConnect = require("./database/database.js")
const express = require("express");
const app = express();
const { auth, userAuth } = require('./middlewares/auth')
const userData = require('./models/user.js')
app.use(express.json())
app.post('/signUp', async (req, res) => {
    // console.log(req.body)
    res.send("data is successfully created")
    // creating instance of the user model
    const user = new userData({
        firstName: "arpit",
        address: "lucknow",
        phone: 9988776655,
        age: 26
    })
    // error handling 
    try{
    // save the data to the databse  we use save() 
    await user.save();
    res.send("data is stored successfully")
    } catch(err){
        res.status(404).send("error pls check",arr.message)
    }
})
dbConnect().then(() => {



    console.log('Databae connection established....');
    app.listen(20000, () => {
        console.log('express is running');
    })
}).catch(err => {
    console.error("mongoose are not connected ")
})
