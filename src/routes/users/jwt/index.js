const express = require('express');
const jwtFunc = require('../../../lib/jwt/jwt');

const router = express.Router();


router.post('/jwt/v1', jwtFunc)

module.exports = router;