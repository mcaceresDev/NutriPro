'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class disease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  disease.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    observations: DataTypes.STRING,
    symptom: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'disease',
    freezeTableName: true
  });
  return disease;
};