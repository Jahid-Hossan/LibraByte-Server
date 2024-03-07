const express = require('express');
const router = express.Router();
const getNewArrivals = require('../../../apis/newArrivals/getNewArrivals/getNewArrivals');
router.get('/reversedBooks', getNewArrivals);
module.exports = router;

