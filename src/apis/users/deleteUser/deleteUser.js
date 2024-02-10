const { ObjectId } = require('mongodb')
const usersCollection = require('../../../models/users/userSchema')

const deleteUser = async(req, res) => {
    const id = req.params.id

    const filter = {_id: new ObjectId(id)}
    const result = await usersCollection.findByIdAndDelete(filter)
    res.send(result)
}

module.exports = deleteUser