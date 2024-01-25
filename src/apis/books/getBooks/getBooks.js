const booksCollection = require('../../../models/books/bookSchema');

const getBooks = async (req, res) => {
    try {
        const result = await booksCollection.find()
        res.send(result);
    } catch (error) {
        console.log(error)
    }
}

module.exports = getBooks;