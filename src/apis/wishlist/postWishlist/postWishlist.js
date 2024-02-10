const wishlistCollections = require('../../../models/wishlist/wishlistSchema')


const postWishlist = async (req, res) => {
    try {
        const wishlistData = req.body;
        const result = await wishlistCollections.create(wishlistData);
        res.send(result);
    } catch (error) {
        console.error("Error posting wishlist:", error);
        res.status(500).send("Internal Server Error");
    }
};


module.exports = postWishlist;