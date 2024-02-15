const express = require('express');
const router = express.Router();
const getNewArrivals = require('../../../apis/newArrivals/getNewArrivals');
router.get('/books', getNewArrivals);
module.exports = router;

