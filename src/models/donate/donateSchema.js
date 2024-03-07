const { Schema, model } = require('mongoose');

const donateSchema = new Schema({
   
    bookname: {type: String} ,
    author: {type: String} ,
    description: {type: String} ,
    condition: {type: String} ,
    category: {type: String} ,
    name: {type: String} ,
    email: {type: String} ,
    note: {type: String} ,
    photo:{type: String}   
})


const donationCollection = model("donation",donateSchema)
module.exports = donationCollection;