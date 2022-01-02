const express = require('express');
const router = express.Router();
const currentBalanceAction = require('../app/http/controllers/actions/getCurrentBalanceAction');
const currentBalanceByExchangeAction = require('../app/http/controllers/actions/getCurrentBalanceByExchangeAction');
const auth = require('../app/infrastructure/middleware/auth');

router.get('/', auth, currentBalanceAction.getCurrentBalance);
router.get('/:id', auth, currentBalanceByExchangeAction.getCurrentBalanceByExchange);

module.exports = router;