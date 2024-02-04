const borrowCollection= require('../../../models/borrow/borrowSchema');

const postBorrow = async (req, res) => {
    try {
        const bookData = req.body
        const result = await borrowCollection.create(bookData)
        res.send(result)
       
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = postBorrow;