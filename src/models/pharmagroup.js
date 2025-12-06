'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pharmagroup extends Model {
    
    static associate(models) {
      pharmagroup.hasMany(models.drug, {foreignKey: 'pharmaGroupId'})
    }
  }
  pharmagroup.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pharmagroup',
    freezeTableName: true
  });
  return pharmagroup;
};