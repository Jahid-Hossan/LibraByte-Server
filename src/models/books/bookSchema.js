const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
    editor: { type: String, required: true },
    language: { type: String, required: true },
    paperback: { type: Boolean, required: true },
  });
  
  const Book = model('books', bookSchema);
  
  module.exports = Book;