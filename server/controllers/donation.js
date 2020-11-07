/* eslint-disable camelcase */
const dotenv = require('dotenv');

dotenv.config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const { Donation } = require('../models/Donation');

exports.createDonation = async (req, res) => {
  console.log('stripe-routes.js 9 | route reached', req.body);
  const { name, email, phone, amount, id } = req.body;
  console.log('stripe-routes.js 10 | amount and id', amount, id);

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: 'Our Sole Earth Donation',
      payment_method: id,
      confirm: true,
    });

    console.log('stripe-routes.js 19 | payment', payment);
    const newDonation = new Donation();
    newDonation.patron_name = name;
    newDonation.patron_email = email;
    newDonation.patron_phone = phone;
    newDonation.amount = amount;

    await newDonation.save();

    return res.status(200).send({
      message: 'Payment Successful',
      success: true,
    });
  } catch (error) {
    console.log('stripe-routes.js 17 error', error);
    res.status(400).send({
      message: 'Payment Failed',
      success: false,
    });
  }
};