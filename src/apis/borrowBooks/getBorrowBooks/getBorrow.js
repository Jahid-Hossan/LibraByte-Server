const borrowCollection = require('../../../models/borrow/borrowSchema')

const getBorrow = async(req, res) => {
    // console.log(req.decoded.email);
    // const query = { email:  req.decoded.email };
    const bookData = await borrowCollection.find()
    // const bookDatas = await borrowCollection.find(query)
    res.send(bookData)
}

module.exports = getBorrow