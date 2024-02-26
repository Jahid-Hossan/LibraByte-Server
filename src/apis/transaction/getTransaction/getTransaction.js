const paymentCollections = require('../../../models/payment/paymentSchema');
const getTransaction = async (req, res) => {
    try {

        const result = await paymentCollections.find()
        res.send(result);
    } catch (error) {
        console.log(error)
    }
}

module.exports = getTransaction;