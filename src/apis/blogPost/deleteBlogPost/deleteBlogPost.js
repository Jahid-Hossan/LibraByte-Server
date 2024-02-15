const { ObjectId } = require('mongodb')
const blogPostCollection = require('../../../models/blogPost/blogPostSchema')

const deleteBlogPost = async(req, res) => {
    const id = req.params.id

    const filter = {_id: new ObjectId(id)}
    const result = await blogPostCollection.findByIdAndDelete(filter)
    res.send(result)
}

module.exports = deleteBlogPost