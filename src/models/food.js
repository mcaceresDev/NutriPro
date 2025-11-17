'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  food.init({
    code: DataTypes.INTEGER,
    name: DataTypes.STRING,
    aqua: DataTypes.DECIMAL,
    energy: DataTypes.INTEGER,
    protein: DataTypes.DECIMAL,
    totalFat: DataTypes.DECIMAL,
    carbs: DataTypes.DECIMAL,
    dietaryFiber: DataTypes.DECIMAL,
    ceniza: DataTypes.DECIMAL,
    calcium: DataTypes.DECIMAL,
    phosphorus: DataTypes.DECIMAL,
    iron: DataTypes.DECIMAL,
    thiamine: DataTypes.DECIMAL,
    riboflavin: DataTypes.DECIMAL,
    niacin: DataTypes.DECIMAL,
    vitC: DataTypes.INTEGER,
    vitA: DataTypes.INTEGER,
    monoiFatAcid: DataTypes.DECIMAL,
    poliiFatAcid: DataTypes.DECIMAL,
    satFatAcid: DataTypes.DECIMAL,
    cholesterol: DataTypes.INTEGER,
    potassium: DataTypes.INTEGER,
    sodium: DataTypes.INTEGER,
    zinc: DataTypes.DECIMAL,
    magnesium: DataTypes.INTEGER,
    vitB6: DataTypes.DECIMAL,
    vitB12: DataTypes.DECIMAL,
    folicAcid: DataTypes.INTEGER,
    folato: DataTypes.INTEGER,
    edibleFraction: DataTypes.DECIMAL,
    addedBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'food',
    freezeTableName: true
  });
  return food;
};