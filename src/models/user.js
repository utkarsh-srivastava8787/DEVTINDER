const mongoose = require('mongoose')
var validator = require('validator');
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        // this unique keywords can not register the same name data in userData name must be different 
        unique: true
    },
    address: {
        type: String,
    },
    // we can use 'required' so that no user can sumbit form without this field
    phone: {
        type: String,
        required: true,
        validate: { validator: (value)=>{
            if(!validator.isMobilePhone(value)){
                throw new Error("Enter Valid Phone number")
            }
        }
        }
    },
    age: {
        type: Number
    },
    country: {
        type: String,
        // by using default object we can add default message for the block 
        default: "India"
    },
    skills: {
        // if we have multiple value type should be array of data 
        type: [String]
    },
    email: {
        type: String,
        // use trim method to remove any white spaces in the email
        validate: (value) => {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email ", value)
            }; //=> true)
        },
        trim: true
    }

})

const userModel = mongoose.model("User", UserSchema)
module.exports = userModel