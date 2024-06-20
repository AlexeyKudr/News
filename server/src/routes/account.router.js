const express = require('express');
const { News, User } = require('../../db/models');
const { verifyAccessToken } = require('../middlewares/verifyTokens');

const accountRouter = express.Router();

accountRouter.route('/').get(verifyAccessToken, async (req, res) => {
  try {
    const userId = res.locals.user.id;

    const news = await News.findAll({
      include: {
        model: User,
        where: { id: userId },
        attributes: ['id', 'name', 'email'],
        through: { attributes: [] }
      },
    });
    res.json(news);
  } catch (error) {
    res.status(500).send('Internal server error');
  }
})
.post(verifyAccessToken, async (req, res) => {
    try {
      const userId = res.locals.user.id;
      const { newsId } = req.body;

      const [userNews, created] = await UserNews.findOrCreate({
        where: { userId, newsId }
      });

      if (created) {
        res.status(200).send('News added to user account');
      } else {
        res.status(200).send('News already exists in user account');
      }
    } catch (error) {
      res.status(500).send('Internal server error');
    }
  });

module.exports = accountRouter;
