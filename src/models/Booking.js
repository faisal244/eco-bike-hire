// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");

// import our database connection from config.js
const sequelize = require("../config/connection");

//import Category for
const Category = require("./Category");

// Initialize Bike model (table) by extending off Sequelize's Model class
class Booking extends Model {}

// userId
// pricePlan
// bikeId
// duration
// dicountAmount - discuss this with team should it be the other way round?
// total
// startDate
// endDate
// subTotal

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
references 
    autoIncrement: true,
  },
  pricePlan: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  bikeId: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      isNumeric: true,
    },
  },

  discountAmount: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 20,
    validate: {
      isNumeric: true,
    },
  },

  startDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  endDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  subTotal: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 20,
    validate: {
      isNumeric: true,
    },
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  freezeTableName: true,
  modelName: "booking",
};

Price.init(schema, options);

module.exports = Booking;
