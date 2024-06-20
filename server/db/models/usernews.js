'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserNews extends Model {
    static associate({User, News}) {
      this.belongsTo(User, {foreignKey: 'userId'});
      this.belongsTo(News, {foreignKey: 'newsId'});
    }
  }
  UserNews.init({
    userId: DataTypes.INTEGER,
    newsId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserNews',
  });
  return UserNews;
};