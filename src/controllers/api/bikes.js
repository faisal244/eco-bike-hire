const { Bike } = require("../../models");

const getAllBikes = async (req, res) => {
  try {
    const data = await Bike.findAll({});

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all bikes | ${error.message}`);

    return res
      .status(500)
      .json({ success: false, error: "Failed to get all bikes" });
  }
};

const getSingleBike = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Bike.findByPk(id);

    if (!data) {
      console.log(`[ERROR]: Bike not found`);

      return res.status(404).json({ success: false, error: "Bike not found" });
    }

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get single bike | ${error.message}`);

    return res
      .status(500)
      .json({ success: false, error: "Failed to get single bike" });
  }
};

module.exports = {
  getAllBikes,
  getSingleBike,
};
