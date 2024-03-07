const express = require('express');
const router = express.Router();
const getReviews = require('../../../apis/reviews/getReviews/getReviews');
router.get('/reviews/v1', getReviews);
module.exports = router;

