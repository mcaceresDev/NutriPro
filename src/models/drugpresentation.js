'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class drugPresentation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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