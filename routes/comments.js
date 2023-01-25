var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.post('/posts/:id/comments', ensureLoggedIn, commentsCtrl.createPostComment)
router.post('/posts/:id/threadposts/:id/comments', ensureLoggedIn, commentsCtrl.createThreadComment)


module.exports = router