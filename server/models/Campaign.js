const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

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

    body: {
      type: {},
      required: true,
      max: 200000,
    },

    startDate: {
      type: Date,
    },

    endDate: {
      type: Date,
    },

    references: [
      {
        type: ObjectId,
        ref: 'Reference',
      },
    ],

    like: {
      type: [{ type: ObjectId, ref: 'User' }],
    },

    postedBy: {
      type: ObjectId,
      ref: 'User',
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
