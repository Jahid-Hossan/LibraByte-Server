const express = require ("express")
const router = express.Router()
const getBlogPost = require('../../../apis/blogPost/getBlogPost/getBlogPost')

router.get('/blogPost/v1', getBlogPost)

module.exports = router