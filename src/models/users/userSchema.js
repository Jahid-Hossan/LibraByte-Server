const { Schema, model } = require("mongoose");


const userSchema = new Schema(
    {
        "name": "string",
        "email": "string",
        "role": "string",
        "author": "string",
        "subscription": "string",
        "date": "string"
    }
)

const userCollections = model("users", userSchema);

module.exports = userCollections;