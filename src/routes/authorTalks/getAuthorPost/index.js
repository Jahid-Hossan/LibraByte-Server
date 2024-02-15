const express = require ("express")
const router = express.Router()
const getAuthorTalksPost = require('../../../apis/authorTalks/getAuthorTalksPost/getAuthorTalksPost')

router.get('/authorTalks/v1', getAuthorTalksPost)

module.exports = router