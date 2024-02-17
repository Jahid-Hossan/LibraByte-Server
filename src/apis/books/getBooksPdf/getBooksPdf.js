const booksPdfCollection = require('../../../models/books/booksPdfSchema');

const getBooksPdf = async (req, res) => {
    try {

        const result = await booksPdfCollection.find()
        res.send(result);
    } catch (error) {
        console.log(error)
    }
}

module.exports = getBooksPdf;