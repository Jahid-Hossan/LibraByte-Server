const express = require ('express')
const router = express.Router()
const patchBorrow = require('../../../apis/borrowBooks/patchBorrowBooks/patchBorrow')

router.patch('/addborrow/v1/:id', patchBorrow)

module.exports = router