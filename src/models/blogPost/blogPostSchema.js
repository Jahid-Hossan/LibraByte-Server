const { Schema, model } = require("mongoose");

const blogPostSchema = new Schema({
    name: { type: String },
    email: { type: String },
    image: { type: String },
    bookName: { type: String },
    bookReview: { type: String },
});

const blogPostCollection = model("blogposts", blogPostSchema);
// console.log(blogPostCollection);
module.exports = blogPostCollection;
