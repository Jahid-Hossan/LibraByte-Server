const { Schema, model } = require("mongoose");

const authorTalksSchema = new Schema(
    {
        authorImage: {type: String},
        authorName: {type: String},
        authorEmail: {type: String},
        authorTitle: {type: String},
        authorPost: {type: String},
        authorHashTag: {type: Object},
    }
)

const authorTalks = model('authorTalk', authorTalksSchema)
module.exports = authorTalks