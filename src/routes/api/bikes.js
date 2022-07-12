const { Router } = require("express");

const { getAllBikes, getSingleBike } = require("../../controllers/api");

const router = Router();

router.get("/", getAllBikes);

router.get("/:id", getSingleBike);

module.exports = router;
