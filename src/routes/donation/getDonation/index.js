const express = require('express')
const router = express.Router()
const getDonation = require("../../../apis/donation/getDonation/getDonation")

router.get('/ngo-donate/v1', getDonation)
module.exports = router