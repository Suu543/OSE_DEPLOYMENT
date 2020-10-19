const express = require('express');

const router = express.Router();

const {
  create,
  removeTopic,
  readAllTopics,
  readSingleTopic,
} = require('../controllers/topic');
const { auth } = require('../middleware/auth');
const { runValidation } = require('../validators');
const { topicCreationValidator } = require('../validators/topic');

router.get('/topics', readAllTopics);
router.get('/topic/:slug', readSingleTopic);
router.post('/topic', auth, create);
router.delete('/topic/:slug', auth, removeTopic);

module.exports = router;
