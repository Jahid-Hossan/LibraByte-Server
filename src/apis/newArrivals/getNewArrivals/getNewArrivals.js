const booksCollection = require('../../../models/books/bookSchema');

const getNewArrivals = async (req, res) => {
    try {

        const result = await booksCollection.find().sort({_id: -1})
        res.send(result);
    } catch (error) {
        console.log(error)
    }
}

module.exports = getNewArrivals;