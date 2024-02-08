require('dotenv').config()
const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
    console.log(req.headers);
    if (!req.headers.authorization) {
        return res.status(401).send({ massage: 'Forbidden Access 1' })
    }
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, (error, decoded) => {
        if (error) {
            return res.status(401).send({ massage: 'Forbidden Access 2' })
        }
        req.decoded = decoded;
        next()
    })
}

module.exports = verifyToken;