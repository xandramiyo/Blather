const Post = require('../models/post')

module.exports = {
	create,
}

function create(req, res) {
	Post.findById(req.params.id, function(err, post) {

        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar

        post.threadPosts.push(req.body)
        post.save(function(err) {
            res.redirect(`/posts/${post._id}`)
        })
    })
}