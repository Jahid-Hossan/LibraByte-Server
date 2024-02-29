const donationCollection = require('../../../models/donate/donateSchema');

const postDonation = async (req, res) => {
    try {
        const donationData = req.body;

        // Check if the product already exists based on a combination of fields
// console.log(req.body)
        // Product doesn't exist, create a new one
        const result = await donationCollection.create(donationData);
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

module.exports = postDonation;
