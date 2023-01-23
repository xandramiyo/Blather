const Post = require('../models/post')

module.exports = {
    index,
    new: newPost,
    create,
}

function index(req, res) {
    Post.find({}, function (err, posts) {
        res.render("posts/index", { title: "My Threads", posts });
      })
}

function newPost(req, res) {
    res.render("posts/new", { title: "Start New Thread" })
}

function create(req, res) {
    req.body.user = req.user._id
    req.body.userName = req.user.name
    req.body.userAvatar = req.user.avatar

    const post = new Post(req.body);
    post.save(function (err, post) {
      if (err) return res.redirect("/posts/new");
      console.log(post);
      res.redirect('/posts');
    });
}