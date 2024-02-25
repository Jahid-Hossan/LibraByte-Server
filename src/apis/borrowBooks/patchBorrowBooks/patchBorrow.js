const { ObjectId } = require('mongodb')
const borrowCollection = require('../../../models/borrow/borrowSchema')

const patchBorrow = async (req, res) => {
    const id = req.params.id
    const borrowData = req.body
    const filter = { _id: new ObjectId(id) }
    const updateData = {
        $set: {
            borrow_status: borrowData.borrow_status
        }
    }

    const result = await borrowCollection.findByIdAndUpdate(filter, updateData)

    res.send(result)

    // console.log(borrowData);
}


module.exports = patchBorrow