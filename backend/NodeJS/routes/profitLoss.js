const express = require('express');
const router = express.Router();
const profitLossAction = require('../app/http/controllers/actions/getProfitLossAction');
const profitLossByExchangeAction = require('../app/http/controllers/actions/getProfitLossByExchangeAction');

router.get('/', profitLossAction.getProfitLoss);
router.get('/:id', profitLossByExchangeAction.getProfitLossByExchange);

module.exports = router;