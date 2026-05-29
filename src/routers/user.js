const express = require('express');

const userRouter = express.Router();

userRouter.get('/get-all-users', require('../controllers/users/get_all_users'))
userRouter.post('/add-user', require('../controllers/users/add_user'))

module.exports = userRouter;