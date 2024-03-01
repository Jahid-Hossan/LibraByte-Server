const { Schema, model } = require("mongoose");


const complainSchema = new Schema({
    name: { type: String },
    email: { type: String },
    image: { type: String },
    complain: { type: String },
    status: { type: String }
})

const complainCollections = model("complains", complainSchema)

module.exports = complainCollections