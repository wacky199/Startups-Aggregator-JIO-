const mongoose = require("mongoose")
const individualStartupSchema = new mongoose.Schema({
	startupName: "string",
	industry: "string",
	foundersInfo: "string",
	productsDetail: "string",
	fundingHistory: "string"
})
module.exports = mongoose.model("IndividualStartupModel", individualStartupSchema)