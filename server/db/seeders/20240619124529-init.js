'use strict';
const getArticles = require('../../articles')


/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {

    const articles = await getArticles();
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
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
