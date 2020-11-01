const dotenv = require('dotenv');
const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');
const moment = require('moment');
const { Campaign } = require('../models/Campaign');

dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

exports.createCampaign = async (req, res) => {
  const {
    title,
    description,
    image,
    buttonText,
    amount,
    link,
    startDate,
    endDate,
  } = req.body;

  const base64Data = new Buffer.from(
    image.replace(/^data:image\/\w+;base64,/, ''),
    'base64'
  );

  const convertedStartDate = moment(startDate).format('YYYY-MM-DD hh:mm:ss');
  const convertedEndDate = moment(endDate).format('YYYY-MM-DD hh:mm:ss');

  const type = image.split(';')[0].split('/')[1];
  const params = {
    Bucket: 'ose',
    Key: `campaign/${uuidv4()}.${type}`,
    Body: base64Data,
    ACL: 'public-read',
    ContentEncoding: 'base64',
    ContentType: `image/${type}`,
  };

  s3.upload(params, async (err, data) => {
    const newCampaign = new Campaign({
      title,
      description,
      buttonText,
      amount,
      link,
      startDate: convertedStartDate,
      endDate: convertedEndDate,
    });

    if (err) res.status(400).json({ error: 'Upload to S3 Failed...' });
    console.log('AWS UPOLOAD RES DATA', data);

    newCampaign.image.url = data.Location;
    newCampaign.image.key = data.key;

    try {
      await newCampaign.save();
      return res.status(201).json({
        message: `${title} campaign is successfully created...`,
      });
    } catch (error) {
      return res.status(409).json({
        error: `Failed to create ${title} campaign...`,
      });
    }
  });
};

exports.readAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find({});

    return res.status(200).json(campaigns);
  } catch (error) {
    return res.status(400).json({
      error: 'Failed to load Topics',
    });
  }
};

exports.readSingleCampaign = async (req, res) => {
  const { title } = req.params;

  try {
    const singleCampaign = await Campaign.findOne({ title });

    if (!singleCampaign) {
      return res.status(404).json({
        error: `${title} campaign not found...`,
      });
    }

    return res.status(200).json(singleCampaign);
  } catch (error) {
    return res.status(404).json({
      error: `${title} campaign not found...`,
    });
  }
};

exports.removeCampaign = async (req, res) => {
  const { title } = req.params;

  try {
    const removedCampaign = await Campaign.findOneAndRemove({ title });
    if (!removedCampaign) {
      return res.status(404).json({
        error: `${title} campaign not found...`,
      });
    }

    return res.status(200).json({
      message: `${title} is successfully deleted...`,
    });
  } catch (error) {
    return res.status(404).json({
      error: `Failed to delete ${title} campaign...`,
    });
  }
};
