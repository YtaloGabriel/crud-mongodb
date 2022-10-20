const mongoose = require('mongoose');

const Book = mongoose.model('Book', {
  isbn: Number,
  title: String,
  author: String,
  summary: String,
  releaseYear: Number,
});

module.exports = Book;
