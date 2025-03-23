const express = require('express');
const { getAllBook, getBookById } = require('../controllers/getAllBookController');
const { addBook } = require('../controllers/addBookController');
const { updateBooks } = require('../controllers/updateBookController');
const { deleteBook } = require('../controllers/deleteBookController');

const router = express.Router();

router.route('/getBooks').get(getAllBook)
router.route('/getBooks/:id').get(getBookById)
router.route('/addBook').post(addBook)
router.route('/updateBook/:id').put(updateBooks)
router.route('/deleteBook/:id').delete(deleteBook)

module.exports = router


