// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection from config.js
const sequelize = require('../config/connection');

//import Category for
const Category = require('./Category');

// Initialize Bike model (table) by extending off Sequelize's Model class
class Bike extends Model {}

// set up fields and rules for Bike model
const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  brand: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  modelType: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
      min: 1,
      max: 50,
    },
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: 'id',
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  coverImageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue:
      'https://images-eu.ssl-images-amazon.com/images/I/81m4xtW13UL.__AC_SX300_SY300_QL70_ML2_.jpg',
    validate: {
      isUrl: true,
    },
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  freezeTableName: true,
  modelName: 'bike',
};

Bike.init(schema, options);

module.exports = Bike;
