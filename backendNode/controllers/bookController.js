const Book = require('../model/book');

exports.createBook = async (req, res) => {
  try {
    let book = await Book.create(req.body);

    res.status(201).json({ success: true, book });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

exports.getAllBook = async (req, res) => {
  try {
    let book = await Book.find();

    res.status(201).json({ success: true, book });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

exports.getByIdBook = async (req, res) => {
  try {
    const _id = req.params.id;

    let book = await Book.findById({ _id });

    if (!book) {
      throw new Error(`book not found by this id: ${_id}`);
    }
    res.status(201).json({ success: true, book });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const _id = req.params.id;

    let book = await Book.findById({ _id });

    if (!book) {
      throw new Error(`book not found by this id: ${_id}`);
    }
    book = await Book.findByIdAndUpdate(_id, req.body, { new: true });
    res.status(201).json({ success: true, message: 'book updated', book });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const _id = req.params.id;
    // console.log(_id);
    let book = await Book.findById({ _id });
    console.log(_id);
    if (!book) {
      throw new Error(`book not found by this id: ${_id}`);
    }
    book = await Book.findByIdAndDelete(_id);
    res
      .status(201)
      .json({ success: true, message: `id: ${_id} with this book deleted` });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
