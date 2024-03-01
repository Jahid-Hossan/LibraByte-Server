const { ObjectId } = require('mongodb')
const complainCollections = require('../../../models/complains/complainSchema')

const patchComplains = async(req, res) => {
    const id = req.params.id
    const complainData = req.body
    const filter = { _id: new ObjectId(id) }

    const updateComplains = {
        $set: {
            status: complainData.status
        }
    }

    const result = await complainCollections.findByIdAndUpdate(filter, updateComplains)
    res.send(result)
}

module.exports = patchComplains