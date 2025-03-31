const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: `Welcome to your Node.js Starter App! - ${process.env.APP_NAME}` });
  //res.send('Welcome to your Node.js Starter App! - ${process.env.APP_NAME}'); `Hello`
});

module.exports = router;