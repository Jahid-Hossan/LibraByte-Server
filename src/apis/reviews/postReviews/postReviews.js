const reviewsCollection = require('../../../models/reviews/reviewSchema')


const postReviews = async (req, res) => {
    try {
        const reviewData = req.body
        const result = await reviewsCollection.create(reviewData)
        res.send(result)
       
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = postReviews