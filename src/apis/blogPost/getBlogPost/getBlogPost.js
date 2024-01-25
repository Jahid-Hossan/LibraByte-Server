const blogPostCollections = require('../../../models/blogPost/blogPostSchema')


const getBlogPost = async (req, res) => {
    try {
        
        const result = await blogPostCollections.find()
        res.send(result)
       
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = getBlogPost