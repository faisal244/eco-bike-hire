const Bike = require("./Bike");
const User = require("./User");
const Category = require("./Category");
const Booking = require("./Booking");
const Pricing = require("./Pricing");

Booking.belongsTo(User, {
  foreignKey: "userId",
});

User.hasMany(Booking, {
  foreignKey: "userId",
});

Booking.belongsTo(Bike, {
  foreignKey: "bikeId",
});

Bike.hasMany(Booking, {
  foreignKey: "bikeId",
});

Bike.belongsTo(Category, {
  foreignKey: "categoryId",
});

Category.hasMany(Bike, {
  foreignKey: "categoryId",
});

Pricing.belongsTo(Bike, {
  foreignKey: "bikeId",
});

Bike.hasOne(Pricing, {
  foreignKey: "bikeId",
});

module.exports = {
  Bike,
  Category,
  Booking,
  User,
  Pricing,
};
