const { Category } = require("../models/Category");

const categoryData = [
  {
    category_name: "Mountain Bike",
  },
  { category_name: "Road Bike" },
  { category_name: "Folding Bike" },
  {
    category_name: "Electric Bike",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
