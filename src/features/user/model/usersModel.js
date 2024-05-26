import { DataTypes } from 'sequelize';
import sequelize from './database.js';
import Form from './form.js';

const FormData = sequelize.define('FormData', {
  uniqueId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  formId: {
    type: DataTypes.UUID,
    references: {
      model: Form,
      key: 'uniqueId',
    },
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

// Define associations
Form.hasMany(FormData, { foreignKey: 'formId' });
FormData.belongsTo(Form, { foreignKey: 'formId' });

export default FormData;
