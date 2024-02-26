const reviewsCollection = require('../../../models/reviews/reviewSchema')


const getReviews = async (req, res) => {
    try {
        
        const result = await reviewsCollection.find()
        res.send(result)
       
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = getReviews