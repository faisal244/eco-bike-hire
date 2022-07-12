const path = require("path");

const getAllBikes = async (req, res) => {
  return res.render("getAllBikes");
};

const getSingleBike = async (req, res) => {
  return res.render("getSingleBikes");
};

const getAllBookings = async (req, res) => {
  return res.render("getAllBookings");
};

const getSingleBooking = async (req, res) => {
  return res.render("getSingleBooking");
};

module.exports = {
  getAllBikes,
  getSingleBike,
  getAllBookings,
  getSingleBooking,
};
