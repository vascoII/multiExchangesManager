const express = require('express');
const router = express.Router();

const userCtrl = require('../app/http/controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;