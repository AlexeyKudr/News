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

  newsRouter.route('/:id').delete(verifyAccessToken, async (req, res) => {
    const { id } = req.params;
    if (Number.isNaN(+id)) {
      return res.status(400).json({ message: 'id must be a number' });
    }
    try {
      const post = await News.findByPk(req.params.id);
      await post.destroy();
      res.json({ message: 'Post deleted' });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

module.exports = newsRouter;
