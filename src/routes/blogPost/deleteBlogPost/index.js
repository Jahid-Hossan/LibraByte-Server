const express = require('express')
const router = express.Router()

const blogPostData = require('../../../apis/blogPost/deleteBlogPost/deleteBlogPost')

router.delete('/blogPostDelete/v1/:id', blogPostData)

module.exports = router