const { Schema, model } = require('mongoose');

const borrowBookSchema = new Schema({
   
    Book_name: {type: String} ,
    Book_image: {type: String},
    Date: {type: String},
    borrower_email: {type: String},
    borrower_name:{type: String}

    
})


const borrowCollection = model("borrow",borrowBookSchema)
module.exports = borrowCollection;