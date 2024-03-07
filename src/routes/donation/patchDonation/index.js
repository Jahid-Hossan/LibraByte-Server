const express = require('express')
const router = express.Router()
const patchDonation = require("../../../apis/donation/patchDonation/patchDonation")

router.patch('/ngo-donate/v1/:id', patchDonation)
module.exports = router