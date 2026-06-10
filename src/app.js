
// we created a server using express


const express = require("express");
const app = express();

app.get("/user/:userId/:name/:password", (req, res) => {
    console.log(req.params)
    res.send({
        name: "utkarsh",
        class: "BCA"
    })
})
app.post("/user", (req, res) => {
    res.send('post req executed')
})

app.use('/hello/2', (req, res) => {
    res.send('hello 2 will be print ')
})

// whenever we change the parameter we have to rerun the file 
app.use('/hello', (req, res) => {
    res.send('server is running theough nodemon');
})
// here is the sequence matters when you use the similar path you have to call this method on top of /hello path 
// app.use('/hello/2', (req, res)=>{
//     res.send('hello 2 will be print ')
// })
app.use('/', (req, res) => {
    res.send('go to /hello page');
})
// to prevent file render the code for every change we use Node nodemon
app.listen(55555, () => {
    console.log('express is running');
})