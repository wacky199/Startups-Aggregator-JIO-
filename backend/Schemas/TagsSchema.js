const mongoose = require("mongoose")
const tagsSchema = new mongoose.Schema({
    domain: []
});
module.exports = mongoose.model("TagsModel", tagsSchema)