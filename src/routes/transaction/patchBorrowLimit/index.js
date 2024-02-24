const express = require ('express')
const router = express.Router()
const patchBorrowLimit = require('../../../apis/transaction/patchBorrowLimit/patchBorrowLimit')

router.patch('/payment/v1/:id', patchBorrowLimit)

module.exports = router