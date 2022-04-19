const mongoose = require("mongoose");
const individualStartupSchema = new mongoose.Schema({
    startupName: 'string',
    industry: 'string',
    foundersInfo: {},
    product_Details: {},
    funding_History: {},
});

const innovationZoneSchema = new mongoose.Schema({
    timestamp: 'string',
    source: 'string',
    headline: 'string',
    body: 'string',
    imageLink: 'string',
    startupName: 'string',
});

const tagsSchema = new mongoose.Schema({
    domain: 'array',
});

const IndividualStartupSchema = mongoose.model('IndividualStartupSchema', individualStartupSchema);
const InnovationZoneSchema = mongoose.model('InnovationZoneSchema', innovationZoneSchema);
const TagsSchema = new mongoose.model('TagsSchema', tagsSchema);

module.exports = { IndividualStartupSchema, InnovationZoneSchema, TagsSchema };