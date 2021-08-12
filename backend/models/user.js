const mongoose = require('mongoose')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password:  {
        type: String,
        trim: true,
        required: true,
        minlength: 7,
    },
    validation_code: {
        type: String,
        default: 0
    },
    active: {
        type: Boolean,
        default: 0
    }
})


module.exports = User