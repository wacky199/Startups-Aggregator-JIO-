const mongoose = require("mongoose");

const tagsSchema = new mongoose.Schema({
    domain: 'array',
});

const TagsSchema = new mongoose.model('TagsSchema', tagsSchema);

module.exports = { TagsSchema };