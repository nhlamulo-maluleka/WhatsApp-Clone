const mongoose = require('mongoose')

const newUser = mongoose.Schema({
    number: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: false,
    },
    profile: {
        type: String,
        required: false,
    },
    verified: {
        type: Boolean,
        required: true,
        default: false
    }
})

const userSchema = mongoose.model("users", newUser);

module.exports = { userSchema }