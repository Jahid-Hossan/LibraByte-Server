const express = require ("express")
const router = express.Router()
const postComplains = require('../../../apis/complains/postComplains/postComplains')

router.post('/complain/v1', postComplains)

module.exports = router