const express = require('express')
const getUserModel = require('../../models/users/get_user')

const getUserController = (req, res) => {
    const id = req.body.id;

    if (!id) return res.status(401).json({ success: false, message: "Engk" })
    
    const response = getUserModel(req.body)

    res.send(response)

    
}

module.exports = getUserController;