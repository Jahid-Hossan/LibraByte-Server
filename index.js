const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const connectDB = require("./src/db/connectDB");
const multer  = require('multer')
const bodyParser = require('body-parser');


require("dotenv").config();

app.use(
    cors({
        origin: [
            "http://localhost:3000",
            "https://libra-byte-g2a1g6n9i-isalim079.vercel.app",
            "https://libra-byte.vercel.app",
        ],
    })
);



app.use(bodyParser.json({limit: '1024mb'}));
app.use(bodyParser.urlencoded({limit: '1024mb', extended: true}));

app.use(express.json());
app.use('/uploads', express.static('uploads'))


/* multer */

/* ---------------------------------- books pdf uploading ------------------------- */

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null,  uniqueSuffix+file.originalname)
    }
  })

  const bookPdfSchema = require('./src/models/books/booksPdfSchema')
   
  
  const upload = multer({ storage: storage })

  app.post('/upload-files', upload.single('file'), async(req, res) => {
    // console.log(req.file);
    
    // console.log(bookId);
    // console.log(pdfFile);
    const bookId = req.body.bookId
    const pdfFile = req.file.filename

    try {
        await bookPdfSchema.create({bookId: bookId, pdfFile: pdfFile})
        res.send({status: "ok"})
    }
    catch(error) {
        res.json({status: error})
    }
    
  })

  /* --------------------- books pdf uploading done ------------------------- */



const createUsers = require("./src/routes/users/createUsers/index");
const findUsers = require("./src/routes/users/findUsers");
const jwtSignIn = require("./src/routes/users/jwt/index");
const getTopBanner = require("./src/routes/topBanner/getTopBanner/index");
const payment = require("./src/routes/payment/payment");

const getBlogPost = require("./src/routes/blogPost//getBlogPost/index");
const postBlogPost = require("./src/routes/blogPost/postBlogPost/index");

const getBooks = require("./src/routes/books/index");
const borrowBooks = require("./src/routes/borrow/postBorrow/index");
const getBorrowBooks = require('./src/routes/borrow/getBorrow/index')
const patchBorrow = require('./src/routes/borrow/patchBorrow/index')
const patchDeliver = require('./src/routes/borrow/patchDeliver/patchDeliver')
const testFol = require('./src/routes/testFol/index')
const postwish=require('./src/routes/wishlist/postWishlist/index')
const getwish=require('./src/routes/wishlist/getWishlist/index')
const removeWish=require('./src/routes/wishlist/deleteWishlist/index')
const patchReturn = require('./src/routes/borrow/pathcReturn/index')
const patchUserRole = require('./src/routes/users/updateUserRole/index')
const deleteUser = require('./src/routes/users/deleteUser/index')
const deleteBlogPostData = require('./src/routes/blogPost/deleteBlogPost/index')
const postAuthorTalksData = require('./src/routes/authorTalks/postAuthorTalks/index')
const getAuthorTalksData = require('./src/routes/authorTalks/getAuthorPost/index')
const postTransaction=require('./src/routes/transaction/postTransaction/index')
const getTransaction=require('./src/routes/transaction/getTransaction/index')
const patchBorrowLimit=require('./src/routes/transaction/patchBorrowLimit/index')
const getBooksPdf = require('./src/routes/booksPdf/getBooksPdf/index')
const getSubscription = require('./src/routes/subscription/getSubscription/index')
const postComplains = require('./src/routes/complains/postComplains/index')
const getComplains = require('./src/routes/complains/getComplains/index')
const postReviews = require('./src/routes/reviews/postReviews/index')
const getReviews = require('./src/routes/reviews/getReviews/index')
const getNewArrivals = require('./src/routes/newArrivals/getNewArrivals/index')

const postBookPdf = require('./src/routes/booksPdf/postPdfBooks/index')


const postBooks = require('./src/routes/postBooks/index')

const postDonation=require('./src/routes/donation/postDonation/index')
const getDonation=require('./src/routes/donation/getDonation/index')
// const postBooksPdf = require('./src/routes/booksPdf/postPdfBooks/index')


app.use(createUsers);
app.use(findUsers);
app.use(getBooks);
app.use(jwtSignIn);
app.use(getTopBanner);
app.use(payment);
app.use(getBlogPost);
app.use(postBlogPost);
app.use(borrowBooks);
app.use(getBorrowBooks);
app.use(patchBorrow)
app.use(patchDeliver)
app.use(patchReturn)
app.use(patchUserRole)
app.use(deleteUser)
app.use(deleteBlogPostData)
app.use(postAuthorTalksData)
app.use(getAuthorTalksData)
app.use(postwish)
app.use(getwish)
app.use(removeWish)
app.use (getBooksPdf)
app.use(getSubscription)
app.use(postBooks)
app.use(postComplains)
app.use(getComplains)
app.use(postReviews)
app.use(getReviews)
app.use(postBookPdf)
app.use(getNewArrivals)

// app.use(postBooksPdf)

app.use(testFol)



app.use(postTransaction)
app.use(getTransaction)
app.use(patchBorrowLimit)

app.use(postDonation)
app.use(getDonation)
//*****Error handling *****//

app.get("/", (req, res) => {
    res.send("LibraByte is running...");
});

app.all("*", (req, res, next) => {
    const error = new Error(`Can't find ${req.originalUrl} on the server`);
    error.status = 404;
    next(error);
});

const globalErrorHandler = (err, _req, res, _next) => {
    res.status(err.status || 500).json({
        message: err.message,
        errors: err.errors,
    });
};

app.use(globalErrorHandler);

const main = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
};

main();
