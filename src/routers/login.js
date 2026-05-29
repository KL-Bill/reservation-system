const express = require('express');

const loginRouter = express.Router();

loginRouter.post('/login', require('../controllers/login/login'))

module.exports = loginRouter;