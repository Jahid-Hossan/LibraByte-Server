const express = require('express')
const router = express.Router()
const getSubscription = require('../../../apis/subscription/getSubscription/getSubscription')

router.get('/subscription/v1', getSubscription)

module.exports = router