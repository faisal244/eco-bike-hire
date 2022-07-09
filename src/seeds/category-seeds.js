const Category = require("../models/Category");

const categories = [
  { categoryName: "Mountain Bike" },
  { categoryName: "Road Bike" },
  { categoryName: "Folding Bike" },
  { categoryName: "Electric Bike" },
];

const seedCategories = async () => {
  await Category.destroy({
    where: {},
  });
  await Category.bulkCreate(categories);

  console.log("✅ categories");
};

module.exports = seedCategories;
