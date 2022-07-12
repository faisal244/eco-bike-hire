const connection = require("../config/connection");
const seedBikes = require("./bike-seeds");
const seedBookings = require("./booking-seeds");
const seedCategories = require("./category-seeds");
const seedPricing = require("./pricing-seeds");
const seedUsers = require("./user-seeds");

const seedAll = async () => {
  try {
    await connection.sync({ force: true });
    console.log("✅ connected to database");

    await seedCategories();
    await seedBikes();
    await seedUsers();
    await seedPricing();
    await seedBookings();
  } catch (error) {
    console.log(`[ERROR]: Failed to seed database | ${error.message}`);
  }
  process.exit(0);
};

seedAll();
