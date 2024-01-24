
const { Schema, model } = require("mongoose");

const topBannerSchema = new Schema({
    book: {
        "bookName": { type: String },
        "image": { type: String },
        "bgImage": { type: String },
        "bookSubtitle": { type: String },
        "description": { type: String },
    }
});

const topBannerCollections = model("banners", topBannerSchema);

module.exports = topBannerCollections;