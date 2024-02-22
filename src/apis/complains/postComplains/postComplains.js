const complainCollections = require('../../../models/complains/complainSchema')


const postComplains = async (req, res) => {
    try {
        const complainData = req.body
        const result = await complainCollections.create(complainData)
        res.send(result)
       
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = postComplains