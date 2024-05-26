import { DataTypes } from 'sequelize';
import sequelize from '../model/database.js';

const Form = sequelize.define('Form', {
  uniqueId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  isGraduate: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

export default Form;
