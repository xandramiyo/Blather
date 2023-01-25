var express = require('express');
var router = express.Router();
const threadPostsCtrl = require('../controllers/threadPosts')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/posts/:id/threadPosts/:threadId', threadPostsCtrl.show)

router.post('/posts/:id/threadPosts', ensureLoggedIn, threadPostsCtrl.create)

router.delete('/posts/:id/threadPosts/:threadId', ensureLoggedIn, threadPostsCtrl.delete)

module.exports = router