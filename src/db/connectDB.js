const mongoose = require("mongoose");
require("dotenv").config();



const connectDB = async () => {
    console.log("connectting to database");
    const mongoURI = `mongodb+srv://LibraByte-Admin:FUOqX4aNRbcLEfgX@cluster0.shpjug3.mongodb.net/?retryWrites=true&w=majority`

    await mongoose.connect(mongoURI, { dbName: "LibraByte" });
    console.log("connected to database");
};


module.exports = connectDB