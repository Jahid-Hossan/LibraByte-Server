const express = require ("express")
const router = express.Router()
const postReviews = require('../../../apis/reviews/postReviews/postReviews')

router.post('/reviews/v1', postReviews)

module.exports = router