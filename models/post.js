const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: String,
      userAvatar: String,
})

const threadPostSchema = new Schema({
    subHeading1: {
        type: String,
        required: true,
    },
    subHeading2: {
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: String,
      userAvatar: String,
      comments: [commentSchema]
}, {
    timestamps: true
})

const postSchema = new Schema({
    heading: {
        type: String,
    },
    subHeading1: {
        type: String,
        required: true,
    },
    subHeading2: {
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: String,
      userAvatar: String,
      threadPosts: [threadPostSchema],
      comments: [commentSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Post', postSchema)