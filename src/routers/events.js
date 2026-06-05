const express = require('express');
const { authenticateApi } = require('../middlewares/auth');

const eventsRouter = express.Router();

eventsRouter.get('/get-all-events', require('../controllers/events/get_all_events'))
eventsRouter.get('/get-events-count', require('../controllers/events/events-counter'))

module.exports = eventsRouter;