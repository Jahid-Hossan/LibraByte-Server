const { Schema, model } = require('mongoose');

const paymentSchema = new Schema({
   
    paymentId: {type: String} ,
    paymentAmount: {type: String},
    userEmail: {type: String},    
})


const paymentCollection = model("payment",paymentSchema)
module.exports = paymentCollection;