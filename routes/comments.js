var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/posts/:id/comments', commentsCtrl.show)

router.post('/posts/:id/comments', ensureLoggedIn, commentsCtrl.createPostComment)
router.post('/posts/:id/threadposts/:threadId/comments', ensureLoggedIn, commentsCtrl.createThreadComment)

router.delete('/posts/:id/comments/:commentsId', ensureLoggedIn, commentsCtrl.deletePostComment)
router.delete('/posts/:id/threadposts/:threadId/comments/:commentsId', ensureLoggedIn, commentsCtrl.deleteThreadComment)

module.exports = router