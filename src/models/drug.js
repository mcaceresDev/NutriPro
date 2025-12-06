'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class drug extends Model {
    
    static associate(models) {
      drug.belongsTo(models.pharmagroup, {foreignKey: 'pharmaGroupId'})
      drug.belongsTo(models.drugPresentation, {foreignKey: 'presentationId'})
    }
  }
  drug.init({
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
      notNull: {msg: "El campo nombre es obligatorio"},
      notEmpty: {msg: "El campo nombre no puede ir vacío"}
    }
    },
    generic: DataTypes.STRING,
    description: DataTypes.STRING,
    dosage: DataTypes.STRING,
    treatmentPeriod: DataTypes.STRING,
    pharmaGroupId: DataTypes.INTEGER,
    presentationId: DataTypes.INTEGER,
    addedBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'drug',
    freezeTableName: true
  });
  return drug;
};