// import models
const Bike = require("./Bike");
const User = require("./User");
const Category = require("./Category");
const Booking = require("./Booking");
const Price = require("./Pricing");

// Categories belong to bikes,
// bikes belong to priceing and bookings
// pricing and bookings belong to users

// bike belongs to category
//
// bike has bookings. One bike can have many bookings

// Products belongsTo Category
Bike.belongsTo(Category, {
	foreignKey: "category_id",
	onDelete: "CASCADE",
});

// Categories have many Products
Category.hasMany(Bike, {
	foreignKey: "category_id",
});

Bike.belongsTo(Booking, {
	foreignKey: "category_id",
	onDelete: "CASCADE",
});
// Products belongToMany Tags (through ProductTag)
Booking.hasMany(Bike, {
	foreignKey: "category_id",
});

Booking.belongsTo(Bike, {
	foreignKey: "category_id",
	onDelete: "CASCADE",
});
// Products belongToMany Tags (through ProductTag)
Bike.hasMany(Booking, {
	foreignKey: "category_id",
});

Pricing.belongsTo(Bikes, {
	foreignKey: "category_id",
	onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag)
Bike.hasMany(Price, {
	foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)
User.hasMany(Bookings, {
	foreignKey: "category_id",
});

// Tags belongToMany Products (through ProductTag)
Booking.belongsTo(User, {
	through: ProductTag,
	foreignKey: "tag_id",
});

module.exports = {
	Bike,
	Category,
	Booking,
	User,
	Price,
};

// user has many bookings
