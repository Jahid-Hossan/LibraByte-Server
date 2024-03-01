const donationCollection = require('../../../models/donate/donateSchema');
const getDonation = async (req, res) => {
    try {

        const result = await donationCollection.find()
        res.send(result);
    } catch (error) {
        console.log(error)
    }
}

module.exports = getDonation;