var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', postsCtrl.index)
router.get('/new', ensureLoggedIn, postsCtrl.new)
router.get('/:id/edit', ensureLoggedIn, postsCtrl.edit)
router.get('/:id', postsCtrl.show)

router.post('/', ensureLoggedIn, postsCtrl.create)

router.put('/:id', ensureLoggedIn, postsCtrl.update)

router.delete('/:id', ensureLoggedIn, postsCtrl.delete)

module.exports = router;

