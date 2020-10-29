// CampaignID
// Campaign Title
// Campaign Description
// Campaign Organizer - References User Model
// Campaign Submit Button Text
// Campaign Donation Amount
// Campaign Date

const mongoose = require('mongoose');

// const { ObjectId } = mongoose.Schema;

const campaignSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },

    link: {
      type: String,
    },

    image: {
      url: String,
      key: String,
    },

    buttonText: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
      default: 0,
    },

    startDate: {
      type: Date,
    },

    endDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = {
  Campaign,
};
