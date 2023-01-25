const Post = require('../models/post')

module.exports = {
    show,
    createPostComment,
	createThreadComment,
}

function show(req, res) {
    Post.findById(req.params.id, function(err, post) {
        res.render('posts/showPostComments', { post } )
})}

function createPostComment(req, res) {
    Post.findById(req.params.id, function(err, post) {
        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar

        post.comments.push(req.body)
        post.save(function(err) {
            res.redirect(`/posts/${post._id}`)
        })
    })
}

function createThreadComment(req, res) {
	console.log("hi")
}

