const { Bike } = require("../models/Bike");

const bikeData = [
  {
    category_name: "",
  },
  { category_name: "" },
  { category_name: "" },
  {
    category_name: "",
  },
  {
    category_name: "",
  },
];

const seedBikes = () => Category.bulkCreate(bikeData);

module.exports = seedBikes;
