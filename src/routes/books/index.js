const express = require('express');
const router = express.Router();
const getBooks = require('../../apis/books/getBooks/getBooks');
router.get('/books', getBooks);
module.exports = router;

