const express = require ("express")
const router = express.Router()
const postBorrow = require('../../../apis/borrowBooks/postBorrowBooks/postBorrow')
const verifyToken=require('../../../middlewares/verifyToken')
<<<<<<< HEAD
router.post('/addborrow/v1',postBorrow)
=======
router.post('/addborrow/v1', postBorrow)
>>>>>>> b4dad933fd9cd80da91d0e30106c5e924ccd83e2


module.exports = router;