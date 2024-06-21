const mongoose = require('mongoose')

const CollectionSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const CollectionModel = mongoose.model("collection", CollectionSchema)
module.exports = CollectionModel