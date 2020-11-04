const dotenv = require('dotenv');
const { v4: uuidv4 } = require('uuid');
const formidable = require('formidable');
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
  const saveMultiReferences = (references) => {
    const results = [];

    references.forEach((ref) => {
      if (ref.url.length > 0 && ref.key.length > 0) {
        results.push(ref);
      }
    });

    return results;
  };

  const uniqueRefs = (arr) => {
    const filteredArr = arr.reduce((acc, current) => {
      const dup_checker = acc.find((item) => item.url == current.url);
      if (dup_checker) {
        return acc.concat([current]);
      }
      return acc;
    }, []);

    return filteredArr;
  };

  try {
    const campaign = new Campaign();
    const form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.multiples = true;
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({ error: err });
      }

      const {
        title,
        description,
        image,
        buttonText,
        amount,
        body,
        startDate,
        endDate,
        references,
      } = fields;

      if (!title || title.length < 2) {
        return res.status(400).send({
          error: 'Please Enter At Least One Characters...',
        });
      }

      if (!description || description < 10) {
        return res.status(400).send({
          error: 'Please Enter At Least Ten Characters...',
        });
      }

      if (!image) {
        return res.status(400).send({
          error: 'Image link is required...',
        });
      }

      if (!buttonText) {
        return res.status(400).send({
          error: 'Please Enter At Least Five Characters...',
        });
      }

      if (!amount) {
        return res.status(400).send({
          error: 'Please Enter Amount...',
        });
      }

      if (!startDate) {
        return res.status(400).send({
          error: 'start date is required...',
        });
      }

      if (!endDate) {
        return res.status(400).send({
          error: 'end date is required...',
        });
      }

      if (!body || body.length < 1) {
        return res.status(400).send({
          error: 'Please Enter At Least One Character...',
        });
      }

      if (!references) {
        return res.status(400).send({
          error: 'references is required...',
        });
      }

      const base64Data = new Buffer.from(
        image.replace(/^data:image\/\w+;base64,/, ''),
        'base64'
      );

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
        if (err) {
          return res.status(400).send({ error: 'Upload to S3 Failed...'});
        }

        const campaignRefs = saveMultiReferences(uniqueRefs(JSON.parse(references)));
        const convertedStartDate = moment(startDate).format('YYYY-MM-DD hh:mm:ss');
        const convertedEndDate = moment(endDate).format('YYYY-MM-DD hh:mm:ss');

        console.log("Data", data);

        campaign.image.url = data.Location;
        campaign.image.key = data.key;
        campaign.title = title;
        campaign.description = description;
        campaign.buttonText = buttonText;
        campaign.amount = amount;
        campaign.references = campaignRefs;
        campaign.body = body;
        campaign.startDate = convertedStartDate;
        campaign.endDate = convertedEndDate;

        try {
          const newCampaign = await campaign.save();
          console.log('newCamapign', newCampaign);
          return res.status(200).send({
            message: 'Successfully Create New Campaign!',
            campaign: newCampaign,
          });
        } catch (error) {
          return res.status(400).send({ error });
        }
      });
    });
  } catch (error) {
    return res.status(400).send({
      message: error.message || 'Failed to Create Campaign',
    });
  }

  // s3.upload(params, async (err, data) => {
  //   const newCampaign = new Campaign({
  //     title,
  //     description,
  //     buttonText,
  //     amount,
  //     link,
  //     startDate: convertedStartDate,
  //     endDate: convertedEndDate,
  //   });

  //   if (err) res.status(400).json({ error: 'Upload to S3 Failed...' });
  //   console.log('AWS UPOLOAD RES DATA', data);

  //   newCampaign.image.url = data.Location;
  //   newCampaign.image.key = data.key;

  //   try {
  //     await newCampaign.save();
  //     return res.status(201).json({
  //       message: `${title} campaign is successfully created...`,
  //     });
  //   } catch (error) {
  //     return res.status(409).json({
  //       error: `Failed to create ${title} campaign...`,
  //     });
  //   }
  // });
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
  const { id } = req.params;

  try {
    const singleCampaign = await Campaign.findById({ _id: id });

    if (!singleCampaign) {
      return res.status(404).json({
        error: 'campaign not found...',
      });
    }

    return res.status(200).json(singleCampaign);
  } catch (error) {
    return res.status(404).json({
      error: 'campaign not found...',
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
