const newsRouter = require('express').Router();
const { Op } = require('sequelize');
const { News, User } = require('../../db/models');
const { verifyAccessToken } = require('../middlewares/verifyTokens');

newsRouter.route('/').get(async (req, res) => {
  try {
    const posts = await News.findAll();
    res.json(posts);
  } catch (err) {
    res.status(500).send('Internal server error');
  }
});

newsRouter.post('/', async (req, res) => {
  console.log(req.body);
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

module.exports = newsRouter;
