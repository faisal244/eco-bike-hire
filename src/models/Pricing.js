// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");

// import our database connection from config.js
const sequelize = require("../config/connection");

const Bike = require("./Bike");

//import Category for
const Category = require("./Category");

// Initialize Bike model (table) by extending off Sequelize's Model class
class Pricing extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  bikeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Bike,
      key: "id",
    },
  },
  dailyPrice: {
    type: DataTypes.INTEGER(2, 2),
    allowNull: false,
    defaultValue: 20,
    validate: {
      isNumeric: true,
    },
  },

  weeklyPrice: {
    type: DataTypes.INTEGER(3, 2),
    allowNull: false,
    defaultValue: 140,
    validate: {
      isNumeric: true,
    },
  },

  discountCode: {
    type: DataTypes.STRING,
    allowNull: true,
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  freezeTableName: true,
  modelName: "pricing",
};

Pricing.init(schema, options);

module.exports = Pricing;
