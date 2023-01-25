const Post = require('../models/post')
const ThreadPost = require('../models/post')

module.exports = {
    createPostComment,
	createThreadComment,
}

function createPostComment(req, res) {
    console.log(comment)
}

function createThreadComment(req, res) {
	ThreadPost.findById(req.params.id, function(err, threadPost) {
        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar

        threadPost.comments.push(req.body)
        threadPost.save(function(err) {
            res.redirect(`/posts/${threadPost._id}`)
        })
    })
}

