const topBannerCollections = require("../../../models/topBanner/topBannerSchema");

// console.log(topBannerCollections)

const getBanner = async (req, res) => {
    try {
        const result = await topBannerCollections.find()
        res.send(result)
        // console.log(result);
    }
    catch (error) {
        console.log(error);
    }
};

module.exports = getBanner;