const borrowCollection = require('../../../models/borrow/borrowSchema')

const getBorrow = async(req, res) => {

    const bookData = await borrowCollection.find()
    res.send(bookData)
}

module.exports = getBorrow