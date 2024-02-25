const { Schema, model } = require('mongoose');

const wishlistSchema = new Schema({
   
    Book_name: {type: String} ,
    Book_image: {type: String},
    Book_author: {type: String},
    user_email: {type: String},
    user_name:{type: String}
    
})


const wishlistCollection = model("wishlist",wishlistSchema)
module.exports = wishlistCollection;