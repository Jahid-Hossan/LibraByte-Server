// const booksPdfCollection = require('../../../models/books/booksPdfSchema')


// const postBooksPdf = async (req, res) => {
//     try {
//         const bookId = req.body.bookId
//     const pdfFile = req.file.filename
//         const result = await booksPdfCollection.create({bookId: bookId, pdfFile: pdfFile})
//         res.send(result)
       
//     }
//     catch(error) {
//         console.log(error);
//     }
// }

// module.exports = postBooksPdf

const booksCollection = require('../../../models/books/booksPdfSchema')

const postBooksPdf = async(req, res) => {
    const booksData = req.body
    const result = await booksCollection.create(booksData)
    res.send(result)
}

module.exports = postBooksPdf