const booksCollection = require('../../models/books/bookSchema');
const userCollection = require('../../models/users/userSchema');
const borrowCollection = require('../../models/borrow/borrowSchema');

const testFol = async (req, res) => {
    try {

        const books = await booksCollection.find()
        const users = await userCollection.find()
        const borrow = await borrowCollection.find()

        res.send({books, users, borrow});
    } catch (error) {
        console.log(error)
    }
}

module.exports = testFol;