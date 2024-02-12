const authorTalksPostCollection = require('../../../models/authorTalks/authorTalksSchema')

const postAuthorTalks = async(req, res) => {
    const authorTalksData = req.body
    const result = await authorTalksPostCollection.create(authorTalksData)
    res.send(result)
}

module.exports = postAuthorTalks