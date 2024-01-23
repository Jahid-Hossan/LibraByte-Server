const express = require('express');
const createUser = require('../../../apis/users/createUsers/createUsers');
const router = express.Router();

router.post('/users/v1', createUser)

module.exports = router;