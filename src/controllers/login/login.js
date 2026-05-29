const express = require('express');
const cookieParser = require('cookie-parser');
const loginModel = require('../../models/login/login')

const loginController = (req, res) => {
    const { username, password } = req.body;

    if (!username && !password) return res.status(401).json({message: "Unauthenticated"});

    const token = loginModel(req.body);

    if (token) {
        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 1000 * 60 * 60 * 24 // 1 day
        });
        return res.json({
            success: true,
            message: 'Login successful.'
        });
    } else {
        return res.json({
            success: false,
            message: 'Login unsuccessful.'
        });
    }
}

module.exports = loginController;