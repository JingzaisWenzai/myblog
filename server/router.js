const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/getArticles', (req, res, next) => {
  api.getArticles(req, res, next);
});

router.get('/getArticles/:id', (req, res, next) => {
  api.getArticleDetail(req, res, next);
});

router.post('/setValue', (req, res, next) => {
  api.setValue(req, res, next);
});

module.exports = router;