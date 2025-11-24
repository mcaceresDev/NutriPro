'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    
    static associate(models) {
        // user.belongsTo(models.Provider, {
        //   as: "Provider",
        //   foreignKey: "providerId"
        // })      
    }
  }

user.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {msg: "El nombre no puede ser nulo"},
      notEmpty: {msg: "El nombre no puede ir vacío"}
    }
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {msg: "El apellido no puede ser nulo"},
      notEmpty: {msg: "El apellido no puede ir vacío"}
    }
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {msg: "El nombre de usuario no puede ser nulo"},
      notEmpty: {msg: "El nombre de usuario no puede ir vacío"}
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {msg: "El campo correo no puede ser nulo"},
      notEmpty: {msg: "El campo correo no puede ir vacío"},
      isEmail: {msg: "La direccion de correo es invalida"}
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {msg: "La contraseña no puede ser nula"},
      notEmpty: {msg: "La contraseña no puede ir vacía"}
    }
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {msg: "El campo sexo no puede ser nulo"},
      notEmpty: {msg: "El campo sexo no puede ir vacío"}
    }
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  deletedAt: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'user',
  freezeTableName: true,
  paranoid: true
});

 return user; 
}
