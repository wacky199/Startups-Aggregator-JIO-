const mongoose = require("mongoose");

const innovationZoneSchema = new mongoose.Schema({
    timestamp: 'string',
    source: 'string',
    headline: 'string',
    body: 'string',
    imageLink: 'string',
    startupName: 'string',
});

const InnovationZoneSchema = mongoose.model('InnovationZoneSchema', innovationZoneSchema);
module.exports = { InnovationZoneSchema };