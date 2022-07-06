// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");

// import our database connection from config.js
const sequelize = require("../config/connection");

//import Category for
const Category = require("./Category");

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
		type: DataTypes.STRING,
		allowNull: false,
	},
	model: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	stock: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 10,
		validate: {
			isNumeric: true,
		},
	},
	category_id: {
		type: DataTypes.INTEGER,
		references: {
			model: Category,
			key: "id",
		},
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	descriiption: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	coverImageUrl: {
		type: DataTypes.STRING,
		allowNull: true,
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
	modelName: "bike",
};

Bike.init(schema, options);

module.exports = Bike;
