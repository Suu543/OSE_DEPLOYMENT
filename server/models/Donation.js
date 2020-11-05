// DonationID
// Campaign Name - References Campaign Model
// Amount
// Date
// Notes
// DonerID - References User Model

const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const donationSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },

  patron_email: {
    type: String,
  },

  patron_name: {
    type: String,
  },

  patron_phone: {
    type: String,
  },
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = {
  Donation,
};
