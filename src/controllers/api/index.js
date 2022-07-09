const path = require("path");

const getAllBikes = async (req, res) => {
  // try {
  //   return res.render("getAllBikes");
  // } catch (error) {
  //   console.log(`[ERROR]: Failed to get all playlists | ${error.message}`);

  //   return res.status(500).json({ success: false });
  return res.render("getAllBikes");
  //}
};
const getSingleBike = async (req, res) => {
  return res.render("getSingleBikes");
  // try {
  // //   const { id } = req.params;
  // //   const data = await Playlist.findByPk(id);

  // //   if (!data) {
  // //     return res.status(404).json({ success: false });
  // //   }

  // //   return res.json({ success: true, data });
  // // } catch (error) {
  // //   console.log(`[ERROR]: Failed to get all playlists | ${error.message}`);

  // //   return res.status(500).json({ success: false });
  // }
};

const getAllBookings = async (req, res) => {
  // try {
  // } catch (error) {
  //   console.log(`[ERROR]: Failed to get all playlists | ${error.message}`);

  //   return res.status(500).json({ success: false });
  // }
  return res.render("getAllBookings");
};
const getSingleBooking = async (req, res) => {
  // try {
  //   const { id } = req.params;
  //   const data = await Playlist.findByPk(id);
  //   if (!data) {
  //     return res.status(404).json({ success: false });
  //   }
  //   return res.json({ success: true, data });
  // } catch (error) {
  //   console.log(`[ERROR]: Failed to get all playlists | ${error.message}`);
  //   return res.status(500).json({ success: false });
  // }
  return res.render("getSingleBooking");
};

module.exports = {
  getAllBikes,
  getSingleBike,
  getAllBookings,
  getSingleBooking,
};
