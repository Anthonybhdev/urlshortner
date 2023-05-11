const mongoose = require("mongoose");
const Schema = require("schema")

const ShortUrlSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    shortId: {
        type: String,
        required: true
    },
})

const ShortUrl = mongoose.model("ShortUrl", ShortUrlSchema)
module.exports = ShortUrl