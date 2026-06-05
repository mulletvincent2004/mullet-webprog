const Article = require('../models/Article');

const getArticles = async (req, res) => {
  try {
    const articles = await Article.find({});
    res.json({ articles });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createArticle = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) {
      data.image = `/uploads/${req.file.filename}`;
    }
    if (typeof data.paragraphs === 'string') {
      data.paragraphs = JSON.parse(data.paragraphs);
    }
    const article = await Article.create(data);
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateArticle = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) {
      data.image = `/uploads/${req.file.filename}`;
    }
    if (typeof data.paragraphs === 'string') {
      try { data.paragraphs = JSON.parse(data.paragraphs); } catch {}
    }
    const article = await Article.findByIdAndUpdate(
      req.params.id, data, { new: true }
    );
    res.json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteArticle = async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getArticles, createArticle, updateArticle, deleteArticle };