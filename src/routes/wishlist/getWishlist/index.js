const express = require ("express")
const router = express.Router()
const getWishlist = require('../../../apis/wishlist/getWishlist/getWishlist')
router.get('/addwish/v1', getWishlist)

module.exports = router