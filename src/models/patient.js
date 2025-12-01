'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  patient.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      notNull: {msg: "El campo nombre es obligatorio"},
      notEmpty: {msg: "El campo nombre no puede ir vacío"}
    }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      notNull: {msg: "El campo apellido es obligatorio"},
      notEmpty: {msg: "El campo apellido no puede ir vacío"}
    }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      notNull: {msg: "El campo sexo es obligatorio"},
      notEmpty: {msg: "El campo sexo no puede ir vacío"}
    }
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
      notNull: {msg: "El campo fecha de nacimiento es obligatorio"},
      notEmpty: {msg: "El campo fecha de nacimiento no puede ir vacío"}
    }
    },
    age: DataTypes.INTEGER,
    height: {
      type: DataTypes.DECIMAL,
      validate: {
      min: {
        args: [0.5],           // altura mínima aceptada
        msg: "La estatura no puede ser menor de 0.5 metros"
      },
      max: {
        args: [2.5],
        msg: "La estatura no puede ser mayor de 2.5 metros"
      }
    }
    },
    cellphone: DataTypes.STRING,
    email: DataTypes.STRING,
    reference: DataTypes.STRING,
    referencePhone: DataTypes.STRING,
    addedBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'patient',
    freezeTableName: true
  });
  return patient;
};