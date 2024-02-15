const express = require('express');
const router = express.Router();
const getNewArrivals = require('../../../apis/newArrivals/getNewArrivals');
router.get('/newBooks', getNewArrivals);
module.exports = router;

