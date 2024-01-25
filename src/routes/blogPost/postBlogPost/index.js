const express = require ("express")
const router = express.Router()
const postBlogPost = require('../../../apis/blogPost/postBlogPost/postBlogPost')

router.post('/blogPost/v1', postBlogPost)

module.exports = router