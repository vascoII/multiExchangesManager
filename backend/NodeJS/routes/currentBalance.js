const express = require('express');
const router = express.Router();
const currentBalanceCtrl = require('../app/http/controllers/actions/getCurrentBalance');
const currentBalanceByExchangeCtrl = require('../app/http/controllers/actions/getCurrentBalanceByExchange');

router.get('/', currentBalanceCtrl.getCurrentBalance);
router.get('/:id', currentBalanceByExchangeCtrl.getCurrentBalanceByExchange);

module.exports = router;