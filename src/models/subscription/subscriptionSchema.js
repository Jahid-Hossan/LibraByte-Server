const { Schema, model } = require("mongoose");


const subscriptionSchema = new Schema({
    id: { type: Number },
    pack: { type: String },
    price: { type: String },
    borrow_limit: { type: String },
})

const subscriptionCollection = model("subscription", subscriptionSchema)

module.exports = subscriptionCollection