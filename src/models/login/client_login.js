const express = require('express');
const db = require('../../_db/db_functions')

const { signAccess }   = require('../../middlewares/auth');

const clientLoginModel = (req_body) => {
    const { username, password } = req_body;

    const response = db.clientCheckLogin(username, password);

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

module.exports = clientLoginModel;