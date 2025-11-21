import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey } from 'sequelize';
import db from '../config/dbConnection';


class user extends Model<InferAttributes<user>, InferCreationAttributes<user>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare lastname: string;
  declare username: string;
  declare email: string;
  declare password: string;
  declare gender: string;

  // declare providerId: ForeignKey<Category['id']> 
  // timestamps!
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date>;
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
  sequelize: db,
  modelName: 'user',
  freezeTableName: true,
  paranoid: true
});
  
export default user;
