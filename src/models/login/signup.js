const express = require('express') 
const db = require('../../_db/db_functions')

const signupModel = (req_body) => {
    const { id, username, name, password } = req_body

    const response = db.addClient(id, username, name, password)


    return response;
    
}

module.exports = signupModel;

