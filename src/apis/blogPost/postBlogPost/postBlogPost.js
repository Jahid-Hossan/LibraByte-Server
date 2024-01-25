const blogPostCollections = require('../../../models/blogPost/blogPostSchema')


const postBlogPost = async (req, res) => {
    try {
        const blogData = req.body
        const result = await blogPostCollections.create(blogData)
        res.send(result)
       
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = postBlogPost