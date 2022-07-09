const Pricing = require("../models/Pricing");

const pricingData = [
  { dailyPrice: 22, weeklyPrice: 40, bikeId: 1 },
  { dailyPrice: 18, weeklyPrice: 35, bikeId: 2 },
  { dailyPrice: 18, weeklyPrice: 35, bikeId: 3 },
  { dailyPrice: 20, weeklyPrice: 38, bikeId: 4 },
];

const seedPricing = async () => {
  await Pricing.destroy({
    where: {},
    truncate: true,
  });
  await Pricing.bulkCreate(pricingData);

  console.log("PRICING SEEDED");
};

module.exports = seedPricing;
