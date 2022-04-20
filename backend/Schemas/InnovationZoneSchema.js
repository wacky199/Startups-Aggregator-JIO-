const mongoose = require("mongoose")
const innovationZoneSchema = new mongoose.Schema({
    timestamp: "string",
    source: "string",
    headline: "string",
    body: "string",
    imageLink: "string",
    startupName: "string"
})
module.exports = mongoose.model("InnovationZoneModel", innovationZoneSchema)
