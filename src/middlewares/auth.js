const auth =(req,res, next)=>{
 const accessToken =  "xyz"  
  //res.body?accessToken we can use this to get the access token from api
     
     const isAuthenticated= accessToken==="xyz"
     if(!isAuthenticated){
        res.status(404).send("not authorised")
     }
     else{
       next()
     }

}
const userAuth=(req,res,next)=>{
         const accessToken =  "xyz" 
     const isUserAuth= accessToken==="xyz"
     if(!isUserAuth){
        res.status(404).send("not authorised")
     }
     else{
       next()
     }

}

module.exports={
   auth, 
   userAuth
}