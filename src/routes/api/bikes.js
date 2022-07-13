const { Router } = require("express");

const { getAllBikes, getSingleBike } = require("../../controllers/api/bikes");

const router = Router();

router.get("/", getAllBikes);

router.get("/:id", getSingleBike);

module.exports = router;
