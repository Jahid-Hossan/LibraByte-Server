const { Schema, model } = require("mongoose");


const reviewSchema = new Schema({
    name: { type: String },
    email: { type: String },
    image: { type: String },
    rating: { type: Number },
    review: { type: String },
})

const reviewsCollection = model("reviews", reviewSchema)

module.exports = reviewsCollection