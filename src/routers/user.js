const express = require('express');

const userRouter = express.Router();

userRouter.get('/get-all-users', require('../controllers/users/get_all_users'))
userRouter.post('/add-user', require('../controllers/users/add_user'))
userRouter.get('/get-user' , require('../controllers/users/get_user'))

module.exports = userRouter;