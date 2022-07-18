const Bike = require('../models/Bike');

const bikes = [
  {
    brand: 'Ampere',
    modelType: 'Deluxe Step Through 2022',
    stock: 2,
    frameSize: 18,
    wheelSize: 26,
    description:
      'Using the most popular step-through shaping, the light but robust frame includes a fully integrated battery creating a sleek and ultra-contemporary look. Perfect for city riding, but equally at home on a country trail. The powerful 65 Nm motor will allow your trips to be limited only by your imagination. While the quick-release battery makes charging simple and delivers an impressive range with the larger 14Ah battery. With “best in class” components including Shimano gears and a sleek lightweight Zoom Suspension Fork (18 inch frame only) as well as a large LCD display, this high specification electric bike compromises on nothing.',
    coverImageUrl:
      'https://ampereelectric.co.uk/wp-content/uploads/2021/03/1024x1024.jpg ',
    categoryId: 4,
  },
  {
    brand: 'Huffy',
    modelType: 'Extent',
    stock: '1',
    frameSize: 17.5,
    wheelSize: 25,
    description:
      'Looking to ride on the trail today and around the neighborhood tomorrow? The 66 cm. Extent mountain bike does it all! The durable steel bike features a suspension fork for a smooth, and a front disc brake for enhanced stopping power.',
    coverImageUrl:
      'https://cdn.media.halfords.com/i/washford/626982?w=740&h=555&qlt=default&fmt=auto&v=1',
    categoryId: 1,
  },
  {
    brand: 'Vitus',
    modelType: 'Razor W Road Bike',
    stock: '3',
    frameSize: 1,
    wheelSize: 27.5,
    description:
      "Stylish, versatile and comfortable, the Vitus Razor W Road Bike has female-specific geometry and components, plus a low weight. Equipped with Shimano Claris gears and Tektro dual-pivot brakes, it's a reliable and responsive ride.",
    coverImageUrl:
      'https://www.wigglestatic.com/product-media/104680956/Vitus_Razor-W-Road-Bike-Claris-2021_01.jpg?w=2000&h=2000&a=7',
    categoryId: 2,
  },
  {
    brand: 'Btwin',
    modelType: 'Tilt 120',
    stock: '1',
    frameSize: 14.5,
    wheelSize: 20,
    description:
      "The folding design lets you bring your bike on public transport with ease. The Tilt 120 folds up for easy transport in a car, train or bus. Do you want a bike that has it all and can be taken anywhere? The Tilt 120 can be easily stored in the boot of a car. With its 6 speeds and mudguard, you're all set for an adventure.",
    categoryId: 3,
  },
  {
    brand: 'Specialized Allez',
    modelType: 'Allez E5',
    stock: '1',
    frameSize: 15,
    wheelSize: 18,
    coverImageUrl: 'https://www.evanscycles.com/images/products/93350711_l.jpg',
    description:
      'All too often, corners are cut to meet price-points in the entry-level road bike market, but the Allez redefines what it means to be entry level. Focusing on weight, refinement, and reliability like nothing else in its class, the Allez is the first to make these technologies accessible to everyone. Whether youre just getting into road cycling, commuting, or looking for a new bike, the Allez is just as performance-packed as it is versatile. For the build, this Allez features reliable Shimano Claris shifting, durable Axis Sport alloy wheels, our new super-comfy Body Geometry Bridge saddle, and well-protected RoadSport tires.',
    categoryId: 3,
  },
  {
    brand: 'Raleigh',
    modelType: 'Gran Sport',
    stock: '1',
    frameSize: 14,
    wheelSize: 22,
    coverImageUrl:
      'https://www.bikeandgo.co.uk/wp-content/uploads/2020/05/Raleigh-Gran-Sport-Road-Bike.jpg',
    description:
      'This road bike is a Raleigh Gran Sport brand. It is gloss white with some red and black detailing in the logos and a black saddle which can be adjusted. It comes with a Reynolds 520 frame which is sturdy and durable but also lightweight and is easy to manoeuvre. It has Full chromo 4130 forks and a semi cartridge oversize A-headset. It has Shimano 2300 8 speed shifting levers and Tektro R359 brakes which are very effective. It has RSP polished handlebar and stem with RSP black velvet shockproof bar tape. The bike is 54cm. It has a compact chain set.',
    categoryId: 3,
  },

  {
    brand: 'Raleigh',
    modelType: 'Stoweway Electric Folding Bike',
    stock: '1',
    frameSize: 15,
    wheelSize: 19,
    coverImageUrl: 'https://www.evanscycles.com/images/products/91463218_l.jpg',
    description:
      'Caravan holidays in the Peaks, road trips to France, train journeys to the coast – with a bike you can stash away in seconds, the options for adventure are limitless.Designed to be packed away at a moment’s notice, the Stow-E-Way has all the power of a classic e-bike in a nifty, foldable model that’ll fit just about anywhere. Powered by a lightweight TransX motor, this folding electric bike takes the sweat out of cycling, making zipping up hills as easy as racing along the flat. 8-speed Shimano gears give you enough range to conquer those mountainous slopes, while a reflective strip around the tyres keeps you safe in low light. This fully-equipped folding e-bike also comes kitted out with a kickstand, mudguards and a rear pannier rack, ready for whatever your journey throws at you. Max Height is 98cm. Regarding rider height this will be suitable for people from 5 to 63. However a larger seat post will be suitable for people from 52 to 65.',
    categoryId: 3,
  },
  {
    brand: 'Raleigh',
    modelType: 'Electric C Line Explore',
    stock: '1',
    frameSize: 16.5,
    wheelSize: 28,
    coverImageUrl:
      'https://www.evanscycles.com/images/products/70647015_3pl.jpg',
    description:
      'The Electric C Line powers your journey and transforms into a compact, portable package that you can tow, store, and carry anywhere. It’s got all the benefits of Brompton boosted with smart electric technology developed with Williams Advanced Engineering. Cross the city, escape the city, fly up hills, feel the freedom.',
    categoryId: 3,
  },
  {
    brand: 'Brompton',
    modelType: 'Electric M2L Folding Bike',
    stock: '1',
    frameSize: 17.5,
    wheelSize: 22,
    coverImageUrl:
      'https://www.evanscycles.com/images/products/91387503_3pl.jpg',
    description:
      'Fold up and store your electric bike safely inside. Unclip the battery and charge at home, the office or on the go. Designed by world class engineers to fit all the technology and power needed into a small, lightweight and portable package. An electric folding bike you can take anywhere with you. Fold up and jump on the train. Unfold and make your next meeting. Use your Brompton Electric bicycle to hack the city’s transport network and make it work for you. Feel unstoppable in the city with the Brompton Electric bike. Fly up hills. Feel like every ride has a tailwind. See more. Do more. And arrive fresh, and on time, every time.',
    categoryId: 3,
  },

  {
    brand: 'Cannondale',
    modelType: 'Topstone Neo SL2 202',
    stock: '1',
    frameSize: 16.5,
    wheelSize: 27,
    coverImageUrl:
      'https://www.bikeandgo.co.uk/wp-content/uploads/2020/05/Raleigh-Gran-Sport-Road-Bike.jpg',
    description:
      'An unprecedented gravel e-bike collection built for full-on fun and unrivaled capability - pick your adventure, pick the Topstone Neo. The Topstone Neo distills Cannondales experience making fast race bikes, cutting edge e-bikes and ultra-light dual suspension mountain bikes into exceptional machines, designed for maximum fun and range to go places beyond other gravel bikes abilities. A lightweight, capable, and versatile gravel e-bike, with the power to chase horizons, explore routes less travelled or accelerate your daily routine.',
    categoryId: 4,
  },
  {
    brand: 'Fabric Synapse',
    modelType: 'Neo EQ ',
    stock: '1',
    frameSize: 14,
    wheelSize: 25,
    coverImageUrl: 'https://www.evanscycles.com/images/products/91825857_l.jpg',
    description:
      'An e-road bike, with the power, range and comfort to open the roads for everyone..',
    categoryId: 4,
  },
  {
    brand: 'RTrek',
    modelType: 'Powerfly 5',
    stock: '1',
    frameSize: 16.5,
    wheelSize: 23,
    coverImageUrl: 'https://www.evanscycles.com/images/products/70614801_l.jpg',
    description:
      'The Powerfly 5 is a highly capable electric mountain bike for a great value. It pairs a high-end Bosch e-MTB drive system with durable mountain bike components built to stand up to the trail. Plus, it features our user-friendly Removable Integrated Battery (RIB) system that fully encases the battery in the frame, yet does not require tools for removal. This bike is versatile, capable and ready for adventure.',
    categoryId: 4,
  },
  {
    brand: 'Specialized',
    modelType: 'Turbo Levo 29',
    stock: '1',
    frameSize: 18,
    wheelSize: 24,
    coverImageUrl: 'https://www.evanscycles.com/images/products/91789815_l.jpg',
    description:
      'The all-new Levo delivers the unbelievable power to ride more trails through an unequaled combination of ride quality, usable power, and ride anywhere range. It’s the distillation, application, and amplification of a 40-year obsession with creating the world’s best riding mountain bikes. Since its introduction, Levo has set the bar every other e-MTB aims for, and the new Levo raises that bar again.',
    categoryId: 4,
  },
  {
    brand: 'Haibike',
    modelType: 'HardSeven 5',
    stock: '1',
    frameSize: 20,
    wheelSize: 24,
    coverImageUrl: 'https://www.evanscycles.com/images/products/71331918_l.jpg',
    description:
      'Tour or trail? Uphill or downhill? With the HardSeven 5, there is no need for tradeoffs because this is a versatile and agile eMTB. With 120mm travel, snappy disc brakes, nimble 27.5 wheels and a powerful Bosch Performance Line motor with a sleek, integrated 500Wh battery you will have a huge amount of fun on and off the trail. Adventures - here we come!',
    categoryId: 4,
  },
  {
    brand: 'pearson',
    modelType: 'Hammerandtongs',
    stock: '1',
    frameSize: 18,
    wheelSize: 27,
    coverImageUrl:
      'https://www.bikeandgo.co.uk/wp-content/uploads/2020/04/sava-phantom-3-road-bike.jpg',
    description:
      'The name says it all, this is one fast road bike, perfect for a hot lap of Richmond Park, relive the 2000 Olympic course to Box Hill or book it in for the 2022 RideLondon. This agile, carbon all-rounder has been specced for swift, rolling rides out of town but is equally at home buzzing around city tarmac. Enjoy the smooth perforance of Shimanos 105 groupset. The gearing features a broad-range 11-34 rear cassette and compact 50/34 chainset, versatile enough to accommodate easy climbing and fast descents.Hydraulic brakes ensure efficient, reliable stopping. The finishing kit comprises of a two-piece integrated bar and stem combo (keeping all cables hidden away neatly) and a slick bespoke carbon seatpost.',
    categoryId: 1,
  },
];

const seedBikes = async () => {
  await Bike.destroy({
    where: {},
  });
  await Bike.bulkCreate(bikes);

  console.log('✅ bikes');
};

module.exports = seedBikes;
