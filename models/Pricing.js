// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");

// import our database connection from config.js
const sequelize = require("../config/connection");

//import Category for
const Category = require("./Category");

// Initialize Bike model (table) by extending off Sequelize's Model class
class Price extends Model {}

const schema = {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	bike_id: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	daily_price: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 20,
		validate: {
			isNumeric: true,
		},
	},

	weekly_price: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 140,
		validate: {
			isNumeric: true,
		},
	},

	discount_code: {
		type: DataTypes.STRING,
		allowNull: false,
	},
};

const options = {
	sequelize: connection,
	timestamps: true,
	underscored: false,
	freezeTableName: true,
	modelName: "price",
};

Price.init(schema, options);

module.exports = Price;
