const Bike = require("../models/Bike");

const bikeData = [
  {
    brand: "Ampere",
    modelType: "Deluxe Step Through 2022",
    stock: 2,
    frameSize: 18,
    wheelSize: 26,
    description:
      "Using the most popular step-through shaping, the light but robust frame includes a fully integrated battery creating a sleek and ultra-contemporary look. Perfect for city riding, but equally at home on a country trail. The powerful 65 Nm motor will allow your trips to be limited only by your imagination. While the quick-release battery makes charging simple and delivers an impressive range with the larger 14Ah battery. With “best in class” components including Shimano gears and a sleek lightweight Zoom Suspension Fork (18 inch frame only) as well as a large LCD display, this high specification electric bike compromises on nothing.",
    coverImageUrl:
      "https://ampereelectric.co.uk/wp-content/uploads/2021/03/1024x1024.jpg ",
    categoryId: 4,
  },
  {
    brand: "Huffy",
    modelType: "Extent",
    stock: "1",
    frameSize: 17.5,
    wheelSize: 25,
    description:
      "Looking to ride on the trail today and around the neighborhood tomorrow? The 66 cm. Extent mountain bike does it all! The durable steel bike features a suspension fork for a smooth, and a front disc brake for enhanced stopping power.",
    coverImageUrl:
      "https://cdn.media.halfords.com/i/washford/626982?w=740&h=555&qlt=default&fmt=auto&v=1",
    categoryId: 1,
  },
  {
    brand: "Vitus",
    modelType: "Razor W Road Bike",
    stock: "3",
    frameSize: 1,
    wheelSize: 27.5,
    description:
      "Stylish, versatile and comfortable, the Vitus Razor W Road Bike has female-specific geometry and components, plus a low weight. Equipped with Shimano Claris gears and Tektro dual-pivot brakes, it's a reliable and responsive ride.",
    coverImageUrl:
      "https://www.wigglestatic.com/product-media/104680956/Vitus_Razor-W-Road-Bike-Claris-2021_01.jpg?w=2000&h=2000&a=7",
    categoryId: 2,
  },
  {
    brand: "Btwin",
    modelType: "Tilt 120",
    stock: "1",
    frameSize: 20,
    wheelSize: 20,
    description:
      "The folding design lets you bring your bike on public transport with ease. The Tilt 120 folds up for easy transport in a car, train or bus. Do you want a bike that has it all and can be taken anywhere? The Tilt 120 can be easily stored in the boot of a car. With its 6 speeds and mudguard, you're all set for an adventure.",
    coverImageUrl: "",
    categoryId: 3,
  },
];

const seedBikes = async () => {
  await Bike.destroy({
    where: {},
    truncate: true,
  });
  await Bike.bulkCreate(bikeData);

  console.log("BIKES SEEDED");
};

module.exports = seedBikes;
