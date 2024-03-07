const { ObjectId } = require('mongodb')
const donationCollection = require('../../../models/donate/donateSchema')

const patchDonation = async (req, res) => {
    const id = req.params.id
    const donationData = req.body
    const filter = { _id: new ObjectId(id) }
    const updateData = {
        $set: {
            isAccept: donationData.isAccept
        }
    }

    const result = await donationCollection.findByIdAndUpdate(filter, updateData)

    res.send(result)

    // console.log(borrowData);
}


module.exports = patchDonation