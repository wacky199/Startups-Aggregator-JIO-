const mongoose = require("mongoose");
const newsSchema = new mongoose.Schema({
  timestamp: 'string',
  source: 'string',
  headline: 'string',
  body: 'string',
  imageLink: 'string',
  startupName: 'string',
  tag:'string'
});

const NewsModel = mongoose.model('NewsModel', newsSchema);
module.exports = {NewsModel};