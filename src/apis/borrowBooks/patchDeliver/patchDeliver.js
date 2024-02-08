const { ObjectId } = require('mongodb')
const borrowCollection = require('../../../models/borrow/borrowSchema')

const patchDeliver = async (req, res) => {
    const id = req.params.id
    const deliveredData = req.body
    const filter = { _id: new ObjectId(id) }
    const updateData = {
        $set: {
            delivered_status: deliveredData.delivered_status
        }
    }

    const result = await borrowCollection.findByIdAndUpdate(filter, updateData)

    res.send(result)

    // console.log(borrowData);
}

module.exports = patchDeliver