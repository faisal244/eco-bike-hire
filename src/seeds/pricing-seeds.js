const Pricing = require("../models/Pricing");

const prices = [
  { dailyPrice: 22, weeklyPrice: 40, bikeId: 1 },
  { dailyPrice: 20, weeklyPrice: 35, bikeId: 2 },
  { dailyPrice: 18, weeklyPrice: 35, bikeId: 3 },
  { dailyPrice: 20, weeklyPrice: 38, bikeId: 4 },
];

const seedPricing = async () => {
  await Pricing.destroy({
    where: {},
  });
  await Pricing.bulkCreate(prices);

  console.log("✅ pricing");
};

module.exports = seedPricing;
