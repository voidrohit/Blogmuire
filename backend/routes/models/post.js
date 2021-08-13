const mongoose = require('mongoose')

const Post = mongoose.model('post', {
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

module.exports = Post