const express = require('express');
const rateLimit = require('express-rate-limit');
const { proxyHandler } = require('../controllers/ProxyControllers');

const router = express.Router();

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: "❌ Too many requests, please try again after a minute.",
});

router.get('/proxy', limiter, proxyHandler);

module.exports = router;
