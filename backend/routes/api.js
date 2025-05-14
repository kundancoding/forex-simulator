const express = require('express');
const router = express.Router();
const tradeController = require('../controllers/tradeController');

router.get('/rates', tradeController.getRates);
router.post('/convert', tradeController.convertCurrency);
router.get('/portfolio', tradeController.getPortfolio);
router.post('/algo-upload', tradeController.uploadAlgo);

module.exports = router;