'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pharmaFoodInteraction extends Model {
    
    static associate(models) {
      pharmaFoodInteraction.belongsTo(models.drug, { foreignKey: 'drugId' });
      pharmaFoodInteraction.belongsTo(models.food, { foreignKey: 'foodId' });
      pharmaFoodInteraction.belongsTo(models.disease, { foreignKey: 'diseaseId' });
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