const express = require('express');
const multer = require('multer');
const path = require('path');
const { getArticles, createArticle, updateArticle, deleteArticle } = require('../controllers/articleController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const router = express.Router();

router.route('/').get(getArticles).post(upload.single('image'), createArticle);
router.route('/:id').put(upload.single('image'), updateArticle).delete(deleteArticle);

module.exports = router;