const express = require('express');
const {verifyToken} = require('../middlewares/auth')

const loginRouter = express.Router();

loginRouter.post('/login', require('../controllers/login/login'))
loginRouter.post('/signup', require('../controllers/login/signup'))
loginRouter.post('/client-login', require('../controllers/login/client_login'))
loginRouter.post('/admin-login', require('../controllers/login/admin_login'))

loginRouter.get('/auth', (req, res) => {
    const token = req.cookies.token

    if (!token) return res.status(401).json({ message: "Unauthorized" })

    try {
        const user = verifyToken(token)
        req.user = user
        return res.status(200).json({message: "Authorized"})
    } catch (error) {
        return res.status(403).json({message: "Invalid Token"})
    }
})

module.exports = loginRouter;