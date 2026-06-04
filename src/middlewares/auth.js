const jwt = require('jsonwebtoken');
require('dotenv').config();

const signAccess = (user) => {
    const payload = {
        id: user.id,
        name: user.name
    };
    return jwt.sign(payload, process.env.SECRET_KEY);
}

const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.SECRET_KEY);
    } catch {
        return null;
    }
}

const authenticateApi = (req, res, next) => {
    const h = req.headers.authorization;
    const token = h && h.startsWith('Bearer ') ? h.slice(7) : req.cookies?.token;
    const user = token && verifyToken(token);
    
    if (!user) return res.status(401).json({ error: 'Unauthenticated' });

    req.user = user;
    next();
}

const noAuthenticateApi = (req, res, next) => {
    const h = req.headers.authorization;
    const token = h && h.startsWith('Bearer ') ? h.slice(7) : req.cookies?.token;
    const user = token && verifyToken(token); // naay token means dili null | null = walay token

    if (user) return res.status(200).json({ message: "Already authenticated" });

    next();
}

module.exports = {
  signAccess,
  authenticateApi,
  verifyToken,
  noAuthenticateApi
};