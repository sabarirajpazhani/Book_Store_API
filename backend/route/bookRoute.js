const express = require('express');
const { getAllBook, getBookById } = require('../controllers/getAllBookController');
const { addBook } = require('../controllers/addBookController');
const { updateBooks } = require('../controllers/updateBookController');

const router = express.Router();

router.route('/getBooks').get(getAllBook)
router.route('/getBooks/:id').get(getBookById)
router.route('/addBook').post(addBook)
router.route('/updateBook/:id').put(updateBooks)

module.exports = router


