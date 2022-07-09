const Booking = require("../models/Booking");

const BookingData = [
  {
    isDaily: 1,
    startDate: 2022 - 08 - 01,
    duration: 3,
    endDate: 2022 - 08 - 04,
    total: 66.0,
    userId: 1,
    bikeId: 1,
  },
  {
    isDaily: 1,
    startDate: 2022 - 08 - 02,
    duration: 4,
    endDate: 2022 - 08 - 06,
    total: 72.0,
    userId: 2,
    bikeId: 3,
  },
  {
    isDaily: 0,
    startDate: 2022 - 08 - 02,
    duration: 1,
    endDate: 2022 - 08 - 03,
    total: 38.0,
    userId: 3,
    bikeId: 4,
  },
  {
    isDaily: 0,
    startDate: 2022 - 08 - 03,
    duration: 3,
    endDate: 2022 - 08 - 06,
    total: 60.0,
    userId: 4,
    bikeId: 2,
  },
];

const seedBookings = async () => {
  // await Booking.destroy({
  //   where: {},
  //   truncate: true,
  // });
  await Booking.bulkCreate(BookingData);

  console.log("BOOKING SEEDED");
};

module.exports = seedBookings;
