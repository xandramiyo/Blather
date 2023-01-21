var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', postsCtrl.index)
router.get('/new', ensureLoggedIn, postsCtrl.new)

router.post('/', ensureLoggedIn, postsCtrl.create)

module.exports = router;
