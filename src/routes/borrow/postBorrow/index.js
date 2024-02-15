const express = require ("express")
const router = express.Router()
const postBorrow = require('../../../apis/borrowBooks/postBorrowBooks/postBorrow')
const verifyToken=require('../../../middlewares/verifyToken')
router.post('/addborrow/v1',verifyToken, postBorrow)

module.exports = router; 