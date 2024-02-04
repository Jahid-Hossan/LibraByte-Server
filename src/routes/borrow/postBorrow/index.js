const express = require ("express")
const router = express.Router()
const postBorrow = require('../../../apis/borrowBooks/postBorrowBooks/postBorrow')

router.post('/addborrow/v1', postBorrow)

module.exports = router;