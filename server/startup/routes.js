const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

// Routes
const authRoutes = require('../routes/auth');
const userRoutes = require('../routes/user');
const tagRoutes = require('../routes/tag');
const topicRoutes = require('../routes/topic');
const blogRoutes = require('../routes/blog');
const campaignRoutes = require('../routes/campaign');
const donationRoutes = require('../routes/donation');

module.exports = function (app) {

  app.use(express.json({ limit: '50mb', type: 'application/json' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));
  app.use(morgan('dev'));
  app.use(helmet());
  app.use(cors());

  app.use('/api', authRoutes);
  app.use('/api', userRoutes);
  app.use('/api', tagRoutes);
  app.use('/api', topicRoutes);
  app.use('/api', blogRoutes);
  app.use('/api', campaignRoutes);
  app.use('/api', donationRoutes);
};
