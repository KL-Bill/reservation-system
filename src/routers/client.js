const express = require('express');
const { authenticateApi } = require('../middlewares/auth');

const clientRouter = express.Router();

clientRouter.get('/get-client', authenticateApi, require('../controllers/clients/get_loggedin_client'))

module.exports = clientRouter;