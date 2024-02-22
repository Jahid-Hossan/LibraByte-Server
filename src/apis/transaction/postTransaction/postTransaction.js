const paymentCollections = require('../../../models/payment/paymentSchema')


const postTransaction = async (req, res) => {
    try {
        const paymentData = req.body
        const result = await paymentCollections.create(paymentData)
        res.send(result)
        // console.log(result)

       
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = postTransaction