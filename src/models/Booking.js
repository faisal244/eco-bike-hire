const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
const Bike = require("./Bike");
const User = require("./User");

class Booking extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  isDaily: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
      min: 1,
    },
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
    },
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
