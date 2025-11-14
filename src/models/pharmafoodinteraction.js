'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pharmaFoodInteraction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pharmaFoodInteraction.init({
    drugId: DataTypes.INTEGER,
    foodId: DataTypes.INTEGER,
    diseaseId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    effect: DataTypes.STRING,
    recommend: DataTypes.STRING,
    evidence: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pharmaFoodInteraction',
    freezeTableName: true
  });
  return pharmaFoodInteraction;
};