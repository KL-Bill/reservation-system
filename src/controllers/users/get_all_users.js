const express = require('express');
const getAllUsersModel = require('../../models/users/get_all_users');

const getAllUsersController = (req, res) => {
    res.send(getAllUsersModel());
}

module.exports = getAllUsersController