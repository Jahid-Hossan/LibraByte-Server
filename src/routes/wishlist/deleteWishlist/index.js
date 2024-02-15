const express = require ("express")
const router = express.Router()
const removeWishlist = require('../../../apis/wishlist/deleteWishlist/deleteWishlist')
router.delete('/removeWish/v1/:id', removeWishlist)

module.exports = router