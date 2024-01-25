const userCollections = require("../../../models/users/userSchema")

// console.log(userCollections)

const findUsers = async (req, res) => {
    try {
        const result = await userCollections.find()
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

module.exports = findUsers;