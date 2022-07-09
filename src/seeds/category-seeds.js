const Category = require("../models/Category");

const categoryData = [
  { categoryName: "Mountain Bike" },
  { categoryName: "Road Bike" },
  { categoryName: "Folding Bike" },
  { categoryName: "Electric Bike" },
];

const seedCategories = async () => {
  await Category.destroy({
    where: {},
    truncate: true,
  });
  await Category.bulkCreate(categoryData);

  console.log("CATEGORIES SEEDED");
};

module.exports = seedCategories;
