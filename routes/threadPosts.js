var express = require('express');
var router = express.Router();
const threadPostsCtrl = require('../controllers/threadPosts')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.post('/posts/:id/threadPosts', ensureLoggedIn, threadPostsCtrl.create)


module.exports = router