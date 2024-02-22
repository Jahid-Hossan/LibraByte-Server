const paymentCollections = require('../../../models/payment/paymentSchema');
const userCollection = require('../../../models/users/userSchema'); // Assuming you have a user schema defined

const postTransaction = async (req, res) => {
    try {
        const paymentData = req.body;
        const result = await paymentCollections.create(paymentData);

        // Update user collection with the subscription from paymentData
        await userCollection.updateOne(
            { email: paymentData.userEmail }, // Assuming userEmail in paymentData corresponds to email in user collection
            { $set: { subscription: paymentData.subscription } }
        );

        res.send(result);
    } catch(error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = postTransaction;
