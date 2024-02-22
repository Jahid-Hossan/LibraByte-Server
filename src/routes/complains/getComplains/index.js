const express = require('express');
const router = express.Router();
const getComplains = require('../../../apis/complains/postComplains/postComplains');
router.get('/complain/v1', getComplains);
module.exports = router;

