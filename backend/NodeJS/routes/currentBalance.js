const express = require('express');
const router = express.Router();
const currentBalanceCtrl = require('../app/http/controllers/actions/getCurrentBalance');
const currentBalanceByExchangeCtrl = require('../app/http/controllers/actions/getCurrentBalanceByExchange');

router.get('/currentBalance', currentBalanceCtrl.getCurrentBalance);
router.get('/currentBalance/:id', currentBalanceByExchangeCtrl.getCurrentBalanceByExchange);

module.exports = router;