
// we created a server using express


const express = require("express");
const app = express();


// use of middleware
app.get("/user", (req, res, next) => {
    // we can add multiple routes handlers (middleware)  for  a single  route 

    res.send(
        console.log("response1!"),
        next()

    )

});
app.use((req, res) => {
    res.send('middle ware 2')
})






app.listen(55555, () => {
    console.log('express is running');
})