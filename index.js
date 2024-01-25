const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const connectDB = require('./src/db/connectDB');

require('dotenv').config();

app.use(cors({
    origin: [
        "http://localhost:3000",
    ]
}));
app.use(express.json());


const createUsers = require('./src/routes/users/createUsers/index')
const findUsers = require('./src/routes/users/findUsers')
const jwtSignIn = require('./src/routes/users/jwt/index')
const getTopBanner = require('./src/routes/topBanner/getTopBanner/index')
const getBlogPost = require('./src/routes/blogPost//getBlogPost/index')
const postBlogPost = require('./src/routes/blogPost/postBlogPost/index')

const getBooks=require('./src/routes/books/index')

app.use(createUsers)
app.use(findUsers);
app.use(getBooks);
app.use(jwtSignIn)
app.use(getTopBanner)
app.use(getBlogPost)
app.use(postBlogPost)






//*****Error handling *****// 

app.get('/', (req, res) => {
    res.send('LibraByte is running...')
})

app.all('*', (req, res, next) => {
    const error = new Error(`Can't find ${req.originalUrl} on the server`);
    error.status = 404;
    next(error);
})

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
        console.log(`Example app listening on port ${port}`)
    })
}

main();