const express = require('express')
const router = express.Router()
const postBooks = require('../../apis/books/postBooks/postBooks')

router.post('/books', postBooks)

module.exports = router