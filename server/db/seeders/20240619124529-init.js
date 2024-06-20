'use strict';
const getArticles = require('../../articles');
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const articles = await getArticles();

    if (!articles || articles.length === 0) {
      console.error("No articles fetched");
      return;
    }

    const newsData = articles.map(article => ({
      title: article.title,
      preview: article.preview,
      description: article.description,
      image: article.image,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('News', newsData);

    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: '123@123',
        password: await bcrypt.hash('123', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert('UserNews', [
      {
        userId: 1,
        newsId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('News', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};
