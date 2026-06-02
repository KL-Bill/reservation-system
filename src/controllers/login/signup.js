const express = require('express');
const cookieParser = require('cookie-parser');
const singupModel = require('../../models/login/signup')

const singupController = (req, res) => {
    const { id, name, username, password } = req.body;

    if (!id || !name || !username || !password) return res.status(401).json({ success: false, message: "Invalid!" })

        const response = signupModel(req.body);

        if (response) {
        res.status(200).json({ success: true, message: "Success!" })
    } else {
        res.status(400).json({ success: false, message: "Error!" })
    }
}

module.exports = singupController;
