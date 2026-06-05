const express = require('express');
const getClientModel = require('../../models/clients/get_loggedin_client');

const getClientController = (req, res) => {
    const id = req.user.id

    const response = getClientModel(req.user)
      res.send(response)
   
}

module.exports = getClientController;