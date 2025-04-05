const logger = require('../logger'); 
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: `Welcome to your Node.js Starter App! - ${process.env.APP_NAME}` });
  //res.send('Welcome to your Node.js Starter App! - ${process.env.APP_NAME}'); `Hello`
});

router.get('/Info', (req, res) => {
    res.send(
      `${process.env.DEFAULT_MESSAGE} - ${process.env.APP_NAME} (v${process.env.APP_VERSION})`
    );
  });

router.get('/health', (req, res) => {
    res.json({ status: 'UP' });
  });

router.get('/logtest', (req, res) => {
    logger.info('Log test route was hit!');
    res.send('Logging test completed.');
  });
module.exports = router;

