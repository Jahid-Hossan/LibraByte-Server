const express = require('express')
const router = express.Router()
const getTopBanner = require("../../../apis/topBanner/getBanner/getBanner")

router.get('/topBanner/v1', getTopBanner)
module.exports = router