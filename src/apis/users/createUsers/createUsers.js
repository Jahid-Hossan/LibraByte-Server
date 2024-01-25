const userCollections = require("../../../models/users/userSchema");


const createUser = async (req, res) => {
    try {
        const user = req.body;
        console.log(user);
        const query = { email: user.email }
        const existingUser = await userCollections.findOne(query);
        // console.log(user)
        if (existingUser) {
            return res.send({ massage: 'user already exist', insertedId: null })
        }

        const result = await userCollections.create(user)
        res.send(result)

    } catch (error) {
        console.log(error)
    }
}

module.exports = createUser;