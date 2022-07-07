// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");

// import our database connection from config.js
const sequelize = require("../config/connection");
const Bike = require("./Bike");
const User = require("./User");

//import Category for
const Category = require("./Category");

// Initialize Bike model (table) by extending off Sequelize's Model class
class Booking extends Model {}

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
    references: {
      model: User,
      key: "id",
    },
  },
  bikeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Bike,
      key: "id",
    },
  },
  pricePlan: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  startDate: {
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
  endDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  discountAmount: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  subTotal: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 20,
    validate: {
      isNumeric: true,
    },
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
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

Booking.init(schema, options);

module.exports = Booking;
