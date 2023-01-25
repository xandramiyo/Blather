const Post = require('../models/post')
const ThreadPost = require('../models/post')

module.exports = {
	create,
    show,
    delete: deleteThreadPost,
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
        res.render('posts/showComment', { thread } )
})}

async function deleteThreadPost(req, res, next) {
    try {
        //findById only works on models, not on schemas in embedded data
        const post = await Post.findById(req.params.id)
        const threads = post.threadPosts     
            if(!threads) return res.redirect('/posts')
            post.threadPosts.remove(req.params.threadId)
            //always save the parent document, not the child
            await post.save()
            res.redirect(`/posts/${post._id}`)
        } catch(err) {
        return next(err)
    }
}