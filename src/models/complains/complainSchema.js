const { Schema, model } = require("mongoose");


const complainSchema = new Schema({
    name: { type: String },
    email: { type: String },
    image: { type: String },
    complain: { type: String },
})

const complainCollections = model("complain", complainSchema)

module.exports = complainCollections