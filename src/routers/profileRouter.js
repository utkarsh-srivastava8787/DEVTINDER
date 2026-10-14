const app = require('express');
const profileRouter= app.Router()

profileRouter.get('/profile/view',(req,res)=>{
    const {newToken} = req.cookies
    try{
        if(!newToken){
            throw new Error('please login first')
        }
    res.send('there is 10 item in this profile')

    }catch(err){
        res.send(err.message)
    }
})

module.exports= profileRouter;