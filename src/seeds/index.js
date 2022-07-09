const connection = require("../config/connection");
const seedBikes = require("./bike-seeds");
const seedBookings = require("./booking-seeds");
const seedCategories = require("./category-seeds");
const seedPricing = require("./pricing-seeds");
const seedUsers = require("./user-seeds");

const seedAll = async () => {
  await connection.sync({ force: true });
  console.log("DATABASE SYNCED");

  await seedCategories();
  await seedBikes();
  await seedBookings();
  await seedPricing();
  await seedUsers();

  process.exit(0);
};

seedAll();
