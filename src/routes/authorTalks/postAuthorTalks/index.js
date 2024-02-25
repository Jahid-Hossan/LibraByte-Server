const express = require('express')
const router = express.Router()
const postAuthorTalks = require('../../../apis/authorTalks/postAuthorTalks/postAuthorTalks')

router.post('/authorTalks/v1', postAuthorTalks)

module.exports = router