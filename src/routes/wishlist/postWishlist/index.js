const express = require ("express")
const router = express.Router()
const postWishlist = require('../../../apis/wishlist/postWishlist/postWishlist')
router.post('/addwish/v1', postWishlist)

module.exports = router