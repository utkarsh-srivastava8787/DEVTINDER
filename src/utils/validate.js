var validator = require('validator');

function authenticate(req) {
    const { firstName, email, phone, password } = req.body;

    // Validate name length
    if (!firstName || !email || !phone || !password) {
        throw new Error("please fill these required value firstName, Email and Phone")
    }
    else if (!firstName || firstName.length < 4) {
        throw new Error("Invalid name: should have more than 4 characters");
    }
    else if (!validator.isStrongPassword(password)) {
        throw new Error("password must have 1 uppercase, one number and one symbol")
    }   

    // Validate email
    if (!validator.isEmail(email)) {
        throw new Error("Invalid email address");
    }

    // Validate phone number
    // if (!validator.isMobilePhone(String(phone), "en-IN")) {
    //     throw new Error("Invalid phone number");
    // }

    return true; // Passed all validations
}

module.exports = { authenticate };
