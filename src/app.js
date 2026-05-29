const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const { authenticateApi }   = require('./middlewares/auth.js');

app.use('', require('./routers/login.js'))

app.use('/user', require('./routers/user.js'))

module.exports = app;