const { Schema, model } = require("mongoose");

const topBannerSchema = new Schema(
    {
        
    }
)

const topBannerCollections = model("topBannerDB", topBannerSchema)
module.exports = topBannerCollections