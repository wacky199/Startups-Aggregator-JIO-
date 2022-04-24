const mongoose = require("mongoose")
const innovationSchema = new mongoose.Schema({
    timestamp: "string",
    source: "string",
    headline: "string",
    body: "string",
    imageLink: "string",
    startupName: "string"
})
module.exports = mongoose.model("InnovationModel", innovationSchema)
