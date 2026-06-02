const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const { authenticateApi }   = require('./middlewares/auth.js');

app.use('', require('./routers/login.js'))

app.use('/user', require('./routers/user.js'))

module.exports = app;