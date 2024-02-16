const { ObjectId } = require('mongodb');
const wishlistCollection = require('../../../models/wishlist/wishlistSchema');

const removeWishlist = async (req, res) => {
    const bookId = req.params.id;

  try {
    const result = await wishlistCollection.deleteOne({ _id: new ObjectId(bookId) });
  res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = removeWishlist;
