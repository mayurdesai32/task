const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: [100, 'Please Enter Book Name 100 char less than '],
    required: [true, 'Please Enter Book Name'],
  },
  summary: {
    type: String,
    required: [true, 'Please Enter Book Summary'],
  },
  img: {
    type: String,
    required: [true, 'Please Enter Book Image url'],
  },
});

module.exports = mongoose.model('Book', bookSchema);
