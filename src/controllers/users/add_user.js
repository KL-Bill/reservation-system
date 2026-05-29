const express = require('express')
const addUserModel = require('../../models/users/add_user');

const addUserController = (req, res) => {
    const { id, name, username, password } = req.body;

    if (!id || !name || !username || !password) return res.status(401).json({ success: false, message: "Buta ka boi?" })

    // call our model to add the user
    const response = addUserModel(req.body);

    if (response) {
        res.status(200).json({ success: true, message: "Wow char success!" })
    } else {
        res.status(400).json({ success: false, message: "Patay naay problema bai!" })
    }
}

module.exports = addUserController;