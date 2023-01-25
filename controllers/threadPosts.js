const Post = require('../models/post')
const ThreadPost = require('../models/post')

module.exports = {
	create,
    show,
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

function show(req, res) {
    Post.findById(req.params.id, function(err, post) {
        let thread = post.threadPosts.filter(function(p) {
            return req.params.threadId == p._id
        })
        console.log('thread', thread)
        res.render('posts/showComment', { thread } )
})}