'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class foodcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  foodcategory.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'foodcategory',
    freezeTableName: true
  });
  return foodcategory;
};