const express = require('express')
const getUserModel = require('../../models/users/get_user')

const getUserController = (req, res) => {
    res.send(getUserModel())

    const {id} = req.body;

    if (!id) return res.status(401).json({ success: false, message: "Engk" })

    const response = getUserModel(req.body)

    if (response) {
        res.status(200).json({ success: true, message: "Galing!" })
    } else {
        res.status(400).json({ success: false, message: "Aruy aruy aguy aguy!" })
    }
}

module.exports = getUserController;