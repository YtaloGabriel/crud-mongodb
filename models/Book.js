const mongoose = require('mongoose');

const Book = mongoose.model('Book', {
  imageLink: String,
  isbn: Number,
  title: String,
  author: String,
  summary: String,
  releaseYear: Number,
});

module.exports = Book;
