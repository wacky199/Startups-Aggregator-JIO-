const mongoose = require("mongoose");
const individualStartupSchema = new mongoose.Schema({
    startupName: 'string',
    industry: 'string',
    foundersInfo: {},
    product_Details: {},
    funding_History: {},
});
const IndividualStartupSchema = mongoose.model('IndividualStartupSchema', individualStartupSchema);
module.exports = { IndividualStartupSchema };