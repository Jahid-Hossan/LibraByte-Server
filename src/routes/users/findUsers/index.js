const express = require('express');
const router = express.Router();
const findUsers = require("../../../apis/users/findUsers/findUsers");

router.get('/users/v1', findUsers)

module.exports = router;