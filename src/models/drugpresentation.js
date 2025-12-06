'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class drugPresentation extends Model {
    
    static associate(models) {
      drugPresentation.hasMany(models.drug, {foreignKey: 'presentationId'})
    }
  }
  drugPresentation.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'drugPresentation',
    freezeTableName: true
  });
  return drugPresentation;
};