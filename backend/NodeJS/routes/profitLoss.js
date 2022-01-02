const express = require('express');
const router = express.Router();
const profitLossCtrl = require('../app/http/controllers/actions/getProfitLoss');
const profitLossByExchangeCtrl = require('../app/http/controllers/actions/getProfitLossByExchange');

router.get('/profitLoss/', profitLossCtrl.getProfitLoss);
router.get('/profitLoss/:id', profitLossByExchangeCtrl.getProfitLossByExchange);

module.exports = router;