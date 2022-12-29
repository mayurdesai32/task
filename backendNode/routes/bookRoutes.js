const express = require('express');
const router = express.Router();

const Book = require('../model/book');

const {
  createBook,
  getAllBook,
  getByIdBook,
  updateBook,
  deleteBook,
} = require('../controllers/bookController');

router.post('/create', createBook);
router.get('/getall', getAllBook);
router.get('/getbyid/:id', getByIdBook);
router.put('/updatesingle/:id', updateBook);

router.delete('/deletesingle/:id', deleteBook);

module.exports = router;
