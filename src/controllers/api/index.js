const path = require("path");

const Bike = require("../../models/Bike");
const Booking = require("../../models/Booking");

const getAllBikes = async (req, res) => {
  try {
    const data = await Bike.findAll({});

    console.log(data);
    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all bikes | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const getSingleBike = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Bike.findByPk(id);

    if (!data) {
      return res.status(404).json({ success: false });
    }

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get single bike | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const data = await Booking.findAll({});

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all bookings | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const getSingleBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Booking.findByPk(id);

    if (!data) {
      return res.status(404).json({ success: false });
    }

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get single booking | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

module.exports = {
  getAllBikes,
  getSingleBike,
  getAllBookings,
  getSingleBooking,
};
