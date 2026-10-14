    const express = require('express')
    const userData = require('../models/user')
    // const app = express() 
    const authRouter = express.Router()
    var cookieParser = require('cookie-parser');
    const jwt = require('jsonwebtoken');
    const secretKey= 'DevTinder'
    

    const bcrypt = require('bcrypt');
    authRouter.use(express.json())


    authRouter.post("/signUp", async (req, res) => {

        try {
            const saltRounds = 10;
            const { password } = req.body;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

            console.log('bcrypt password', hashedPassword)
            // const user = req.body;
            const user = new userData({
                "firstName": req.body.firstName,
                "address": req.body.address,
                "phone": req.body.phone,
                "age": req.body.age,
                "country": req.body.country,
                "email": req.body.email,
                "password": hashedPassword
            })  
            await user.save();
            res.send("data added successfully")
        } catch (err) {
            res.status(400).send("sign up is unsuccessfull"+ err.message)
        }
    })

    authRouter.post("/login", async (req, res)=>{
         const {email,password}=req.body;
         try{
        const user= await userData.findOne({email});
         if(!user){
            throw new Error('please check your email')
         }
         const isMatch= bcrypt.compare(password, user.password);
         if(!isMatch){
            throw new Error('Invalid Password')
         }
          const token = jwt.sign(
        { userId: user.id, email: user.email },
        secretKey,
        { expiresIn: '5s' }
    );
         res.cookie("newToken",token);
         
         res.send("logged in sucessfully "+ user)

         }catch(err){
            res.send('invalid email '+ err.message )
         }

    })
    module.exports = authRouter
