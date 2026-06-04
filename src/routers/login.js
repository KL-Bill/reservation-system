const express = require('express');
const { noAuthenticateApi } = require('../middlewares/auth');

const loginRouter = express.Router();

loginRouter.post('/login', require('../controllers/login/login'))
loginRouter.post('/signup', require('../controllers/login/signup'))
loginRouter.post('/client-login', require('../controllers/login/client_login'))
loginRouter.post('/admin-login', require('../controllers/login/admin_login'))

module.exports = loginRouter;