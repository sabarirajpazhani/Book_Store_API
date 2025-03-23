const express = require('express');
const { getAllBook, getBookById } = require('../controllers/getAllBookController');
const { addBook } = require('../controllers/addBookController');

const router = express.Router();

router.route('/getBooks').get(getAllBook)
router.route('/getBooks/:id').get(getBookById)
router.route('/addBook').post(addBook)

module.exports = router


