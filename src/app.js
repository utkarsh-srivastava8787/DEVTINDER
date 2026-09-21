
// we created a server using express
// mogoose pswd: 5eD2YcdfWkEV54cK

const dbConnect = require("./database/database.js")
const express = require("express");
const app = express();
const userData = require('./models/user.js')
const bcrypt = require('bcrypt');
const {authentication}= require("./middlewares/auth.js")
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const { authenticate } = require('./utils/validate.js')
var cookieParser = require('cookie-parser');

app.use(express.json())
app.use(cookieParser());


// -----------post Api data validation password incryption ----------------
app.post("/signUp", async (req, res) => {
  const userReq = req.body;
  try {
    const { password } = req.body

    //encrypt the password
    const bcryptPassword = await bcrypt.hash(password, saltRounds).then(function (hash) {
      // Store hash in your password DB.
      return hash
    });
    console.log("bcryptPassword", bcryptPassword)

    // validation of data 
    authenticate(req)
    //creating a new instance of the user model
    // const data = new userData({...userReq,"password":bcryptPassword});
    const data = new userData({
      "firstName": req.body.firstName,
      "address": req.body.address,
      "phone": req.body.phone,
      "email": req.body.email,

      "password": bcryptPassword,
      "skills": req.body.skills
    })
    await data.save();
    res.send("data added successfully!")
  } catch (error) {
    res.status(400).send("error :" + error)
  }

})

// ------login api ----------- 
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await userData.findOne({ email })
    // console.log
    if (!user) {
      return res.status(400).send('authenticated unsuccessful')
    }


    const isMatch =  bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.status(400).send('data is not found')
     
    }

    // if all things works good then save cookies
    

    const token =  jwt.sign({ _id: user._id }, 'devTinder');
    // console.log('token',token)
    res.cookie('token', token)

    res.send('sucessfully logged in ')

  } catch (error) {
    res.status(400).send("data is not matched")
  }

})
// ------------------------get profile using cookies and jwt------------------


app.get("/profile", authentication, async (req, res) => {
  try {
    // ✅ Access the user attached by authentication middleware
    console.log('user', req.user);

    // ✅ Send back user data
    res.send(req.user);

  } catch (error) {
    console.error("Profile error:", error);
    res.status(400).send("Please login first");
  }
});

app.get('/products', authentication, (req,res,next)=>{
  try{
    res.send("here are Our Products......")
  }catch(Error){
    res.send("error:",Error.message)
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
