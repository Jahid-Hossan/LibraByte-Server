const express = require('express')
const router = express.Router()
const postTransaction = require("../../../apis/transaction/postTransaction/postTransaction")
const verifyToken=require('../../../middlewares/verifyToken')

router.post('/payment/v1', postTransaction)
module.exports = router