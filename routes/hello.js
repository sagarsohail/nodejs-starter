// routes/hello.js
const logger = require('../logger'); // Adjust path if needed
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello from the /hello route!' });
});

module.exports = router;