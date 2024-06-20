const express = require('express');
const { News } = require('../../db/models');
const { verifyAccessToken } = require('../middlewares/verifyTokens');

const newsRouter = express.Router();

newsRouter.route('/')
  .get(verifyAccessToken, async (req, res) => {
    try {
      const posts = await News.findAll();
      res.json(posts);
    } catch (err) {
      res.status(500).send('Internal server error');
    }
  })
  

module.exports = newsRouter;
