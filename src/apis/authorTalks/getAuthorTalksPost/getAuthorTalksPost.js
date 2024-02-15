const authorTalksPostCollections = require('../../../models/authorTalks/authorTalksSchema')


const getAuthorTalksPost = async (req, res) => {
    try {
        
        const result = await authorTalksPostCollections.find().sort({_id: -1})
        res.send(result)
       
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = getAuthorTalksPost