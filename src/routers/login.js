const express = require('express');

const loginRouter = express.Router();

loginRouter.post('/login', require('../controllers/login/login'))
loginRouter.post('/signup', require('../controllers/login/signup'))

module.exports = loginRouter;