const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express();

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// })

app.use(cors({
    origin: "http://localhost:5500",
    credentials: true
    
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const { authenticateApi }   = require('./middlewares/auth.js');

app.use('', require('./routers/login.js'))

app.use('/user', require('./routers/user.js'))

module.exports = app;