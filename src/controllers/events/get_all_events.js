const express = require('express')
const getAllEventsModel = require('../../models/events/get_all_events')

const getAllEventsController = (req, res) => {
    res.send(getAllEventsModel())
}


module.exports = getAllEventsController