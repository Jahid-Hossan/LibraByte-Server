const subscriptionCollection = require("../../../models/subscription/subscriptionSchema")

const getSubscription = async (req, res) => {
    const result = await subscriptionCollection.find()
    res.send(result)
}

module.exports = getSubscription