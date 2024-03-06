const booksCollection = require('../../../models/books/bookSchema')

const postBooks = async(req, res) => {
    const booksData = req.body
    const result = await booksCollection.create(booksData)
    res.send(result)
}

module.exports = postBooks