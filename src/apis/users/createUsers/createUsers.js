const userCollections = require("../../../models/users/userSchema");


const createUser = async (req, res) => {
    try {
        const user = req.body;
        const result = await userCollections.create(user)
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

module.exports = createUser;