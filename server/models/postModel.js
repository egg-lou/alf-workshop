const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    author: {
        type: String,
    },
    content: {
        type: String,
        required: [true, 'Content is required']
    },
    cover_photo: {
        type: String
    },
    data: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Post', postSchema);