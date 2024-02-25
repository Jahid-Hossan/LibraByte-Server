const { ObjectId } = require('mongodb')
const borrowCollection = require('../../../models/borrow/borrowSchema')


const patchDeliver = async(req, res) => {
    const id = req.params.id
    const returnedData = req.body
    const filter = {_id: new ObjectId(id)}
    const updateData = {
        $set: {
            returned_status: returnedData.returned_status
        }
    }

    const result = await borrowCollection.findByIdAndUpdate(filter, updateData)

    res.send(result)
}

module.exports = patchDeliver