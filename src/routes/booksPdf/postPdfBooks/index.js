// const express = require ("express")
// const router = express.Router()
// const multer  = require('multer')
// const postBlogPost = require('../../../apis/books/postBookPdf/postBookPdf')

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '../../../../uploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now()
//       cb(null,  uniqueSuffix+file.originalname)
//     }
//   })  
  
//   const upload = multer({ storage: storage })

// router.post('/upload-files', upload.single('file'), postBlogPost)

// module.exports = router