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
    title: {
        type: String,
        trim: true
    }
})

module.exports = Post