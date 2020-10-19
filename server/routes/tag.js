const express = require('express');

const router = express.Router();

const { create, remove, readAllTags } = require('../controllers/tag');
const { auth } = require('../middleware/auth');
const { runValidation } = require('../validators');
const { tagCreationValidator } = require('../validators/tag');

router.get('/tags', readAllTags);
router.post('/tag', tagCreationValidator, runValidation, auth, create);
router.delete('/tag/:slug', auth, remove);

module.exports = router;
