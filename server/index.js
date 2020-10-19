const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

require('./startup/db')();
require('./startup/routes')(app);

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`This server is listening to ${PORT} port...`);
});

module.exports = server;
