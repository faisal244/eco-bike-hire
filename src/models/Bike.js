const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
const Category = require("./Category");

class Bike extends Model {}

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

  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
      min: 1,
    },
  },
  frameSize: {
    type: DataTypes.DECIMAL(2, 2),
    allowNull: false,
    validate: {
      isNumeric: true,
    },
    wheelSize: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true,
      },
    },
    coverImageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:
        "https://images-eu.ssl-images-amazon.com/images/I/81m4xtW13UL.__AC_SX300_SY300_QL70_ML2_.jpg",
      validate: {
        isUrl: true,
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: "id",
      },
    },
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  freezeTableName: true,
  modelName: "bike",
};

Bike.init(schema, options);

module.exports = Bike;
