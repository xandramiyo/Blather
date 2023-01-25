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
            res.redirect(`/posts/${post._id}/comments`)
        })
    })
}

function createThreadComment(req, res) {
    const post = Post.findById(req.params.id, function(err, post) {
        let thread = post.threadPosts.filter(function(p) {
            return req.params.threadId == p._id
        })
        console.log('thread', thread)

        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar

        if(!thread) return res.redirect('/posts')
        thread[0].comments.push(req.body)
        //always save the parent document, not the child
        post.save()
            res.redirect(`/posts/${post._id}/threadPosts/${threadPost._id}/comments`)   
})}


