const { Schema, model } = require('mongoose');

const paymentSchema = new Schema({
   
    paymentId: {type: String} ,
    subscriptionId:{type: String} ,
    paymentAmount: {type: String},
    paymentDate:{type: String} ,
    userEmail: {type: String}, 
    subscription: {type: String}, 
    borrow_limit: {type: Number},   
})


const paymentCollection = model("payment",paymentSchema)
module.exports = paymentCollection;