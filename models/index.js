// import models
const Bike = require("./Bike");
const User = require("./User");
const Category = require("./Category");
const Booking = require("./Booking");
const Pricing = require("./Pricing");

Booking.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

User.hasMany(Booking, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Booking.belongsTo(Bike, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

Bike.hasMany(Booking, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

Bike.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

Category.hasMany(Bike, {
  foreignKey: "category_id",
});

Pricing.belongsTo(Bike, {
  foreignKey: "bikeId",
  onDelete: "CASCADE",
});

Bike.hasMany(Pricing, {
  foreignKey: "bikeId",
});

module.exports = {
  Bike,
  Category,
  Booking,
  User,
  Pricing,
};
