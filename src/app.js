
// we created a server using express
// mogoose pswd: 5eD2YcdfWkEV54cK

const dbConnect = require("./database/database.js")
const express = require("express");
const app = express();
const { auth, userAuth } = require('./middlewares/auth')
const userData = require('./models/user.js')


app.post('/signUp', async (req, res) => {
    // creating instance of the user model
        const user = new userData({
            firstName: "vikas",
            address:"lucknow",
            phone: 9988776655,
            age: 26
        })
        // save the data to the databse  we use save() 
        await user.save();
    })
dbConnect().then(() => {

    

    console.log('Databae connection established....');
    app.listen(20000, () => {
        console.log('express is running');
    })
}).catch(err => {
    console.error("mongoose are not connected ")
})
