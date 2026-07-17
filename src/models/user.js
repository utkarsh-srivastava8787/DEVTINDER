const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: Number
    },
    age: {
        type: Number
    },

})

const userModel = mongoose.model("User", UserSchema)
module.exports = userModel