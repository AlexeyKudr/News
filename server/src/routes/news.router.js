
const express = require('express')
const { Op } = require('sequelize');
const { User, News, UserNews } = require('../../db/models');
const { verifyAccessToken } = require('../middlewares/verifyTokens');
const newsRouter = express.Router();

newsRouter.route('/').get(verifyAccessToken, async (req, res) => {
  try {
    const posts = await News.findAll();
    res.json(posts);
  } catch (err) {
    res.status(500).send('Internal server error');
  }
}).post(verifyAccessToken, async (req, res) => {
  const { excludeWord, searchString } = req.body;

  try {
    // Пример поиска по ключевому слову и исключению
    const whereClause = {};

    if (searchString) {
      whereClause.title = {
        [Op.iLike]: `%${searchString}%`,
      };
    }

    if (excludeWord) {
      whereClause.title = { [Op.notILike]: `%${excludeWord}%` };
    }

    console.log({ excludeWord, whereClause });

    const results = await News.findAll({
      where: whereClause,
    });

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

  newsRouter.route('/:id').delete(verifyAccessToken, async (req, res) => {
    const { id } = req.params;
    if (Number.isNaN(+id)) {
      return res.status(400).json({ message: 'id must be a number' });
    }
    try {
      const post = await UserNews.findOne({
        where: {userId: res.locals.user.id, newsId: req.params.id}
      });
      await post.destroy();
      res.json({ message: 'Post deleted' });
    } catch (e) {
      res.status(500).json({ message: 'Server error' });
    }
  });
  

module.exports = newsRouter;

