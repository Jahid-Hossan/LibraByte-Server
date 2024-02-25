const wishlistCollection = require('../../../models/wishlist/wishlistSchema');

const getWishlist = async (req, res) => {
    try {
        const userEmail = req.query.email;
        const result = await wishlistCollection.find({ user_email: userEmail });
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = getWishlist;
