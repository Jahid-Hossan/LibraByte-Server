const borrowCollection = require('../../../models/borrow/borrowSchema');

const getBorrow = async (req, res) => {
    try {
        const bookData = await borrowCollection.find().sort({
            borrow_status: 1, // Sort by borrow_status in ascending order (false values first)
            delivered_status: 1 // Then sort by delivered_status in ascending order (false values first)
        });

        res.send(bookData);
    } catch (error) {
        console.error("Error fetching book data:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = getBorrow;
