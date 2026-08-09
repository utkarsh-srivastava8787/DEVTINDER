
// we created a server using express
// mogoose pswd: 5eD2YcdfWkEV54cK

const dbConnect = require("./database/database.js")
const express = require("express");
const app = express();
const userData = require('./models/user.js')



app.use(express.json())

app.post("/signUp", async (req, res) => {
  const userDetail = new userData(req.body)
  try {
    await userDetail.save()
    res.send("user created succesfully")
  } catch (err) {
    res.send("Some Error occured " + err)
  }

})

// --------------post/add the user records -------------
// app.post('/signUp', async (req, res) => {
//   // console.log(req.body)
//   res.send("data is successfully created")
//   // creating instance of the user model
//   const user = new userData(req.body)

//   try {
//     // save the data to the databse  we use save() 
//     await user.save();
//     res.send("data is stored successfully")
//   } catch (err) {
//     res.status(404).send("error pls check", err.message)
//   }
// })

// -------------delete the user record-----------
app.delete("/signUp", async (req, res) => {
  try {

    // dynamic way to assign value to userData
    const userName = req.body.firstName;
    const result = await userData.deleteOne({ firstName: userName });
    res.send("User deleted successfully");

    if (result.deletedCount === 0) {
      return res.status(404).send("User not found");
    }

  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting user");
  }
});

// --------------find the user record-----------------
app.get("/signUp", async (req, res) => {
  const findName = req.body.firstName
  try {
    const data = await userData.find({ firstName: findName });
    // console.log("findName: "+ findName)
    res.send("here is the data :" + data)
  } catch (err) {
    res.send("data not found", err)
  }
})

// -----------------update the user records--------------
app.patch('/signUp/:userId', async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;

  try {
// -------------here we use an array which helps us to not update these value by the user 
    const updateAllowed = [
      "firstName",
      "address",
      "phone",
      "skills"
    ]
// ---this will validation to check each keys of the response body object if the key is inclued in updateAllowed array then return true else return false-------
    const isUpdated = Object.keys(data).every((k) => {

      return updateAllowed.includes(k)
    })
    // ------------if isUpdated is false the if conditon run and response is return to the server and data is not updated----------
    
    if (!isUpdated) {
      res.send("data is not updated ")
    }
    await userData.findByIdAndUpdate(userId, data);

    res.send('sucessfully updated');
  } catch (err) {
    res.send("data is not updated yet" + err);
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
