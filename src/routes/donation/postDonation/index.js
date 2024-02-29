const express = require('express')
const router = express.Router()
const postDonation = require("../../../apis/donation/postDonation/postDonation")

router.post('/ngo-donate/v1', postDonation)
module.exports = router