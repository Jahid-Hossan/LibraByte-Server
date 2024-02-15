const wishlistCollections = require('../../../models/wishlist/wishlistSchema');

const postWishlist = async (req, res) => {
    try {
        const wishlistData = req.body;
        const { Book_name, user_email, user_name } = wishlistData;

        // Check if an entry already exists in the database with the same book name, user email, and user name
        const existingWishlistEntry = await wishlistCollections.findOne({
            Book_name,
            user_email,
            user_name
        });

        if (existingWishlistEntry) {
            // Entry already exists, you can choose to update it or simply send a message indicating that it already exists
            return res.status(400).send("Entry already exists in the wishlist");
        } else {
            // Entry does not exist, create a new one
            const result = await wishlistCollections.create(wishlistData);
            return res.send(result);
        }
    } catch (error) {
        console.error("Error posting wishlist:", error);
        return res.status(500).send("Internal Server Error");
    }
};

module.exports = postWishlist;
