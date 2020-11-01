const express = require('express');

const router = express.Router();

const {
  createCampaign,
  readAllCampaigns,
  readSingleCampaign,
  removeCampaign,
} = require('../controllers/campaign');

router.get('/campaigns', readAllCampaigns);
router.get('/campaign/:title', readSingleCampaign);
router.post('/campaign', createCampaign);
router.delete('/campaign/:title', removeCampaign);

module.exports = router;
