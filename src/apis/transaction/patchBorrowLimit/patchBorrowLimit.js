const { ObjectId } = require('mongodb')
const paymentCollection = require('../../../models/payment/paymentSchema')

const patchBorrowLimit = async (req, res) => {
    const id = req.params.id
    const borrowData = req.body
    const filter = { _id: new ObjectId(id) }
    const updateData = {
        $set: {
            borrow_limit: borrowData.borrow_limit
        }
    }

    const result = await paymentCollection.findByIdAndUpdate(filter, updateData)

    res.send(result)

    // console.log(borrowData);
}


module.exports = patchBorrowLimit;