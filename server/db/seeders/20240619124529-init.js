'use strict';
const getArticles = require('../../articles'); // Ensure the correct path
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    // Fetch articles
    const articles = await getArticles();

    // Check if articles were fetched successfully
    if (!articles || articles.length === 0) {
      console.error("No articles fetched");
      return;
    }

    // Map articles to match the News model schema
    const newsData = articles.map(article => ({
      title: article.title,
      preview: article.preview,
      description: article.description,
      image: article.image,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    // Bulk insert news data
    await queryInterface.bulkInsert('News', newsData);

    // Example user insertion
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

  async down(queryInterface, Sequelize) {
    // Rollback commands if needed
    await queryInterface.bulkDelete('News', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};
