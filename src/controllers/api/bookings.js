const { Booking } = require("../../models");

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

module.exports = {
  getAllBookings,
  getSingleBooking,
};
