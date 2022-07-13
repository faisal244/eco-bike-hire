const path = require("path");

const Bike = require("../../models/Bike");

const getAllBikes = async (req, res) => {
  try {
    const data = await Bike.findAll({});

    if (!data) {
      return res.status(500).json({ message: "Bikes not found" });
    }

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all bikes | ${error.message}`);

    return res
      .status(500)
      .json({ success: false, errorMessage: error.message });
  }
};

const getSingleBike = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Bike.findByPk(id);

    if (!data) {
      return res.status(500).json({ message: "Bike not found" });
    }

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get single bike | ${error.message}`);

    return res
      .status(500)
      .json({ success: false, errorMessage: error.message });
  }
};

module.exports = {
  getAllBikes,
  getSingleBike,
};
