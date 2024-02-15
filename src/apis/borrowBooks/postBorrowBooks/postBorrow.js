const borrowCollection = require('../../../models/borrow/borrowSchema');

const postBorrow = async (req, res) => {
    try {
        const { Book_name, Date, borrower_email } = req.body;

        // Check if the product already exists based on a combination of fields
        const existingProduct = await borrowCollection.findOne({
            Book_name,
            borrower_email,
        });

        if (existingProduct) {
            // Product already exists, send an appropriate response
            return res.status(409).send({ error: 'Product already exists' });
        }
// console.log(req.body)
        // Product doesn't exist, create a new one
        const result = await borrowCollection.create(req.body);
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

module.exports = postBorrow;
