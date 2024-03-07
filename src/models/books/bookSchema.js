const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
    id: { type: Number },
    name: { type: String },
    category: { type: String },
    author: { type: String },
    image: { type: String },
    rating: { type: Number },
    description: { type: String },
    editor: { type: String },
    language: { type: String },
    bookDescription:{ type: String }, 
    authorImage: { type: String } ,
    authorDetails:{ type: String },
    format: { type: String },
    publishingTime: {type: Date}


  });
  
  const Book = model('books', bookSchema);
  
  module.exports = Book;