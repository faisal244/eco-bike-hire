const moment = require("moment");
const { Booking, Pricing } = require("../../models");

const getAllBookings = async (req, res) => {
  try {
    const data = await Booking.findAll({});

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all bookings | ${error.message}`);

    return res
      .status(500)
      .json({ success: false, error: "Failed to get all bookings" });
  }
};

const getSingleBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Booking.findByPk(id);

    if (!data) {
      console.log(`[ERROR]: Booking not found`);

      return res
        .status(404)
        .json({ success: false, error: "Booking not found" });
    }

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get single booking | ${error.message}`);

    return res
      .status(500)
      .json({ success: false, error: "Failed to get single booking" });
  }
};

const createBooking = async (req, res) => {
  try {
    const { bikeId, isDaily, startDate, duration } = req.body;

    console.log(req.body);
    const userId = 1;

    // const userId = req.session.user.id;
    const pricingFromDb = await Pricing.findOne({ where: { bikeId } });

    const pricing = pricingFromDb.get({ plain: true });
    console.log(pricing);

    const cost = isDaily ? pricing.dailyPrice : pricing.weeklyPrice;
    console.log(cost);

    const total = cost * duration;
    console.log(total);

    const endDate = moment(startDate).add(duration, isDaily ? "days" : "weeks");

    const bookingComplete = await Booking.create({
      bikeId,
      isDaily,
      startDate,
      duration,
      userId,
      total,
      endDate,
    });
    console.log(bookingComplete);

    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to create booking | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

module.exports = {
  getAllBookings,
  getSingleBooking,
  createBooking,
};
