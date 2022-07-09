const connection = require("../config/connection");
const seedBikes = require("./bike-seeds");
const seedCategories = require("./category-seeds");

const seedAll = async () => {
  await connection.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedCategories();

  await seedBikes();
  console.log("\n----- BIKES SEEDED -----\n");

  process.exit(0);
};

seedAll();
