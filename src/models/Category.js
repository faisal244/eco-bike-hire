const { Model, DataTypes } = require("sequelize");
const connection = require("../config/connection");

const Bike = require("./Bike");

class Category extends Model {}

Category.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  categoryName: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
});

const options = {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  freezeTableName: true,
  modelName: "user",
};

module.exports = Category;
