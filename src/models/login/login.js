const express = require('express');
const db = require('../../_db/db_functions')

const { signAccess }   = require('../../middlewares/auth');

const loginModel = (req_body) => {
    const { username, password } = req.body;

    const response = db.checkLogin(username, password);

    if (!response) return false;

    // if nakaabot here ang computer, it means naay sulod ang response
    const payload = {
        id: response.id,
        name: response.name
    }
    
    const token = signAccess(payload);
    console.log(token); // himuang comment if di gamiton

    return token
}

module.exports = loginModel;