const jwt = require('jsonwebtoken');
require('dotenv').config();

console.log(process.env.ACCESS_TOKEN)

const jwtFunc = async (req, res) => {
    const user = req.body;
    console.log(user)
    const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
        expiresIn: '1h'
    })
    res.send({ token })
}

module.exports = jwtFunc;