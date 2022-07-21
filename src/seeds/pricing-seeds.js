const Pricing = require("../models/Pricing");

const prices = [
  { dailyPrice: 22, weeklyPrice: 88, bikeId: 1 },
  { dailyPrice: 20, weeklyPrice: 80, bikeId: 2 },
  { dailyPrice: 18, weeklyPrice: 72, bikeId: 3 },
  { dailyPrice: 20, weeklyPrice: 80, bikeId: 4 },
  { dailyPrice: 22, weeklyPrice: 88, bikeId: 5 },
  { dailyPrice: 22, weeklyPrice: 88, bikeId: 6 },
  { dailyPrice: 15, weeklyPrice: 60, bikeId: 7 },
  { dailyPrice: 15, weeklyPrice: 60, bikeId: 8 },
  { dailyPrice: 15, weeklyPrice: 60, bikeId: 9 },
  { dailyPrice: 20, weeklyPrice: 80, bikeId: 10 },
  { dailyPrice: 20, weeklyPrice: 80, bikeId: 11 },
  { dailyPrice: 20, weeklyPrice: 80, bikeId: 12 },
  { dailyPrice: 25, weeklyPrice: 95, bikeId: 13 },
  { dailyPrice: 25, weeklyPrice: 95, bikeId: 14 },
  { dailyPrice: 10, weeklyPrice: 40, bikeId: 15 },
];

const seedPricing = async () => {
  await Pricing.destroy({
    where: {},
  });
  await Pricing.bulkCreate(prices);
};

module.exports = seedPricing;
