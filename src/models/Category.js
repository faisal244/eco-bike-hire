const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");

class Category extends Model {}

const schema = {
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
};

const options = {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  freezeTableName: true,
  modelName: "category",
};

Category.init(schema, options);

module.exports = Category;
