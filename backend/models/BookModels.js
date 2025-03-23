const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    bookTitle: String,
    author: String,
    price: Number,
    publishYear: Number
})

const BookModles = mongoose.model("Books", BookSchema)

module.exports = BookModles