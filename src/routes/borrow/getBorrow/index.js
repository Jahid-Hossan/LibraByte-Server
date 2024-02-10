const express = require ('express')
const router = express.Router()
const getBorrow = require('../../../apis/borrowBooks/getBorrowBooks/getBorrow')
// const verifyToken = require('../../../middlewares/verifyToken')

router.get('/addborrow/v1', getBorrow)

module.exports = router