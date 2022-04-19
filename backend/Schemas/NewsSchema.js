const mongoose = require("mongoose")
const newsSchema = new mongoose.Schema({
    timestamp: String,
    source: String,
    headline: String,
    body: String,
    imageLink: String,
    startupName: String
  });
module.exports = mongoose.model("NewsModel", newsSchema)