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
  foreignKey: "category_id",
});

Bike.hasMany(Booking, {
  foreignKey: "category_id",
});

Bike.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.hasMany(Bike, {
  foreignKey: "category_id",
});

Pricing.belongsTo(Bike, {
  foreignKey: "bikeId",
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
