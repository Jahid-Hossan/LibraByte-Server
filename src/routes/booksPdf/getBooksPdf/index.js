const express = require('express')
const router = express.Router()
const getBooksPdf = require('../../../apis/books/getBooksPdf/getBooksPdf')

router.get('/booksPdf/v1', getBooksPdf)

module.exports = router