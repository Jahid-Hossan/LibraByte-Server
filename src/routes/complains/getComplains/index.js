const express = require('express');
const router = express.Router();
const getComplains = require('../../../apis/complains/getComplains/getComplains');
router.get('/complains/v1', getComplains);
module.exports = router;

