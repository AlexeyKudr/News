'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    static associate(models) {
      // define association here
    }
  }
  News.init({
    title: DataTypes.TEXT,
    preview: DataTypes.TEXT,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'News',
  });
  return News;
};