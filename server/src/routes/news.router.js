const newsRouter = require('express').Router();
const { News, User } = require('../../db/models');
const { verifyAccessToken } = require('../middlewares/verifyTokens');

newsRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const posts = await News.findAll();
      res.json(posts);
    } catch (err) {
      res.status(500).send('Internal server error');
    }
  })

module.exports = newsRouter;