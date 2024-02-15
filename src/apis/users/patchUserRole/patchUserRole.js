const { ObjectId } = require('mongodb')
const usersCollection = require('../../../models/users/userSchema')

const patchUserRole = async(req, res) => {
    const id = req.params.id
    const usersData = req.body
    const filter = { _id: new ObjectId(id) }

    const updateUserRole = {
        $set: {
            role: usersData.role
        }
    }

    const result = await usersCollection.findByIdAndUpdate(filter, updateUserRole)
    res.send(result)
}

module.exports = patchUserRole