'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class drug extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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