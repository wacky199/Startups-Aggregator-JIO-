const mongoose = require("mongoose")
const innovationZoneSchema = new mongoose.Schema({
    timestamp: String,
    source: String,
    headline: String,
    body: String,
    imageLink: String,
    startupName: String
})
module.exports = mongoose.model("InnovationZoneModel", innovationZoneSchema)
