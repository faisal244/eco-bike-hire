const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
const Bike = require("./Bike");

class Pricing extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  dailyPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  },
  weeklyPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isNumeric: true,
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
  modelName: "pricing",
};

Pricing.init(schema, options);

module.exports = Pricing;
