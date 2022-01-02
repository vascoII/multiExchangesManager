const express = require('express');
const router = express.Router();

const loginAction = require('../app/http/controllers/actions/auth/loginAction');
const signupAction = require('../app/http/controllers/actions/auth/signupAction');

router.post('/signup', signupAction.signup);
router.post('/login', loginAction.login);

module.exports = router;