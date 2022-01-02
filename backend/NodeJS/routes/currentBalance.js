const express = require('express');
const router = express.Router();
const currentBalanceCtrl = require('../app/http/controllers/actions/getCurrentBalance');
const currentBalanceByExchangeCtrl = require('../app/http/controllers/actions/getCurrentBalanceByExchange');
const auth = require('../app/infrastructure/middleware/auth');

router.get('/', auth, currentBalanceCtrl.getCurrentBalance);
router.get('/:id', auth, currentBalanceByExchangeCtrl.getCurrentBalanceByExchange);

module.exports = router;