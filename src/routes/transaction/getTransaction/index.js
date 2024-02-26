const express = require('express')
const router = express.Router()
const getTransaction = require("../../../apis/transaction/getTransaction/getTransaction")
router.get('/payment/v1', getTransaction)
module.exports = router