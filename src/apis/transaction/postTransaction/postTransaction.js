const paymentCollections = require('../../../models/payment/paymentSchema');
const userCollection = require('../../../models/users/userSchema');

const postTransaction = async (req, res) => {
    try {
        const paymentData = req.body;
        const result = await paymentCollections.create(paymentData);
        
        // Set subscription status in userCollection
        await userCollection.updateOne(
            { email: paymentData.userEmail },
            { $set: { subscription: paymentData.subscription } }
        );

        res.send(result);
        
        // Schedule a job to update subscription status to "free" after 30 days
        scheduleSubscriptionUpdate(paymentData.userEmail, 30); // Schedule job for 30 days later
    } catch(error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}

// Function to schedule subscription status update
const scheduleSubscriptionUpdate = async (userEmail, days) => {
    try {
        // Calculate date after 'days' from now
        const currentDate = new Date();
        const futureDate = new Date(currentDate.setDate(currentDate.getDate() + days));
        
        // Schedule job to update subscription status to "free" after 'days'
        setTimeout(async () => {
            await userCollection.updateOne(
                { email: userEmail },
                { $set: { subscription: "free" } }
            );
            // console.log(`Subscription status updated to 'free' for user ${userEmail} after ${days} days.`);
        }, days * 24 * 60 * 60 * 1000); 
    } catch(error) {
        console.log(error);
    }
}

module.exports = postTransaction;
