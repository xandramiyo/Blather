const Post = require('../models/post')

module.exports = {
    index,
    show,
    new: newThread,
    create,
    edit,
    update,
    delete: deleteThread,
}

function index(req, res) {
    Post.find({}, function (err, posts) {
        console.log('hi')
        res.render("posts/index", { title: "My Threads", posts });
      })
}

function show(req, res) {
    Post.findById(req.params.id, function(err, post) {
        res.render('posts/show', { post })
    })   
}

function newThread(req, res) {
    res.render("posts/new", { title: "Start New Thread" })
}

function create(req, res) {
    req.body.user = req.user._id
    req.body.userName = req.user.name
    req.body.userAvatar = req.user.avatar

    const post = new Post(req.body);
    post.save(function (err, post) {
      if (err) return res.redirect("/posts/new");
      res.redirect('/posts');
    });
}

function deleteThread(req, res) {
    Post.findOneAndDelete(
        {_id: req.params.id, userRecommending: req.user._id}, function(err) {
            res.redirect('/posts')
        }
    )
}

function edit(req, res) {
    Post.findOne({_id: req.params.id, userRecommending: req.user._id}, function(err, post) {
        console.log(err)
        if(err || !post) return res.redirect('/posts')
        res.render('posts/edit', { title: "Edit Post", post})
    })
}

function update(req, res) {
    console.log(req.body)
    Post.findOneAndUpdate(
        {_id: req.params.id, userRecommending: req.user._id},
        req.body,
        {new: true},
        function(err, post) {
            if (err || !post) return res.redirect('/posts')
            res.redirect(`/posts/${post._id}`)
        }
    )
}