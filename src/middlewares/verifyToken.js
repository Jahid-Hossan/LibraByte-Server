require('dotenv').config()
const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send({ massage: 'Forbidden Access' })
    }
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, (error, decoded) => {
        if (error) {
            return res.status(401).send({ massage: 'Forbidden Access' })
        }
        req.decoded = decoded;
        next()
    })
}

module.exports = verifyToken;