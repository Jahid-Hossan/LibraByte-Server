const { Schema, model } = require("mongoose");

const booksPdfSchema = new Schema({
    bookId: { type: String },
    pdfFile: { type: String},
  });
  
  const bookPdfSchema = model('booksPdf', booksPdfSchema);
  
  module.exports = bookPdfSchema;