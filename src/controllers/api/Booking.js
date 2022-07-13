const path = require("path");

const Booking = require("../../models/Booking");

const getAllBookings = async (req, res) => {
  try {
    const data = await Booking.findAll({});

    if (!data) {
      return res.status(500).json({ message: "Bookings not found" });
    }

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all bookings | ${error.message}`);

    return res
      .status(500)
      .json({ success: false, errorMessage: error.message });
  }
};

const getSingleBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Booking.findByPk(id);

    if (!data) {
      return res.status(500).json({ message: "Booking not found" });
    }

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get single booking | ${error.message}`);

    return res
      .status(500)
      .json({ success: false, errorMessage: error.message });
  }
};

module.exports = {
  getAllBookings,
  getSingleBooking,
};
