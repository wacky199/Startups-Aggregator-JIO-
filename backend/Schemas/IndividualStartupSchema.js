const mongoose = require("mongoose")
const individualStartupSchema = new mongoose.Schema({
	startupName: String,
	industry: String,
	foundersInfo: String,
	productsDetail: String,
	fundingHistory: String
})
module.exports = mongoose.model("IndividualStartupModel", individualStartupSchema)