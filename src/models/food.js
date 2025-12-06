'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class food extends Model {
    static associate(models) {
      food.belongsTo(models.foodcategory, { foreignKey: 'categoryId' });
      // relaciones de muchos a muchos
      food.belongsToMany(models.drug, { through: models.pharmaFoodInteraction, foreignKey: 'foodId' })
      food.belongsToMany(models.disease, { through: models.pharmaFoodInteraction, foreignKey: 'foodId' })
    }
  }
  food.init({
    code: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      validate: {
      notNull: {msg: "El campo codigo es obligatorio"},
      notEmpty: {msg: "El campo codigo no puede ir vacío"}
    }
    },
    name: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      validate: {
      notNull: {msg: "El campo nombre es obligatorio"},
      notEmpty: {msg: "El campo nombre no puede ir vacío"}
    }
    },
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
    addedBy: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'food',
    freezeTableName: true
  });
  return food;
};