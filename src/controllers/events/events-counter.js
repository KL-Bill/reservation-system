const express = require('express')
const getEventsCountModel = require('../../models/events/events-counter')


const getEventsCountController = (req, res) => {
    res.send(getEventsCountModel())
}

module.exports = getEventsCountController