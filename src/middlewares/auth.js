var jwt = require('jsonwebtoken');
// const userData= require('..models/user.js')
const userData = require('../models/user.js')


async function authentication(req, res, next) {
    try{
    const { token } = req.cookies;
            if (!token) {
      return res.status(401).send("Invalid token");  // ✅ return here
    }
    const decoded = jwt.verify(token, 'devTinder')
    const { _id }= decoded
    console.log('decoded', _id )
    const newUser = await userData.findOne({ _id})
    if(!newUser){
        return res.send("User Not Found")
    }
    // return User
    req.user=newUser
    next();            
    console.log('allData', newUser)
    }catch(Error){
        res.status(400).send("not working check again ".Error.message)
    }


}

module.exports = { authentication } 