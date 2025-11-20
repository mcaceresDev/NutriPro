import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey } from 'sequelize';
import db from '../config/dbConnection';

class user extends Model<InferAttributes<user>, InferCreationAttributes<user>> {
  declare id: CreationOptional<number>;
  declare name: string;
}


user.init({
  name: DataTypes.STRING,
  lastname: DataTypes.STRING,
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  gender: DataTypes.STRING
}, {
  sequelize: db,
  modelName: 'user',
  freezeTableName: true
});
  
export default user;
