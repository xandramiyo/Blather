const Post = require('../models/post')

module.exports = {
    show,
    createPostComment,
	createThreadComment,
    deletePostComment,
    deleteThreadComment,
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
            res.redirect(`/posts/${post._id}/threadposts/${thread[0]._id}`)   
})}

async function deletePostComment(req, res, next) {
    try {
        const post = await Post.findById(req.params.id)
        console.log(post)
        // if(!post) return res.redirect('/posts')
        post.comments.remove(req.params.commentsId)
        await post.save()
        res.redirect(`/posts/${post._id}/comments`)
    } catch(err) {
        return next(err)
    }
}

async function deleteThreadComment(req, res, next) {
    try {
        //findById only works on models, not on schemas in embedded data
        const post = await Post.findById(req.params.id)
        const threadPostFoundById = post.threadPosts.find(thread => thread._id.equals(req.params.threadId))
            // if(!threads) return res.redirect('/posts')
            threadPostFoundById.comments.remove(req.params.commentsId)
            //always save the parent document, not the child
            await post.save()
            res.redirect(`/posts/${post._id}`)
        } catch(err) {
        return next(err)
    }
}

