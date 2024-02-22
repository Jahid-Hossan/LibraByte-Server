const complainCollections = require('../../../models/complains/complainSchema')


const getComplains = async (req, res) => {
    try {
        
        const result = await complainCollections.find()
        res.send(result)
       
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = getComplains