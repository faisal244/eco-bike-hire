const connection = require("../config/connection");
const seedBikes = require("./bike-seeds");
const seedCategories = require("./category-seeds");

const seedAll = async () => {
  await connection.sync({ force: true });
  console.log("DATABASE SYNCED");

  await seedCategories();
  await seedBikes();

  process.exit(0);
};

seedAll();
