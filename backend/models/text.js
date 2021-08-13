const mongoose = require('mongoose')

const Text = mongoose.model('Text', {
    text: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    createdAt: {
        type: String
    }
})

module.exports = Text