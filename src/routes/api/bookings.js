const { Router } = require("express");

const { getAllBookings, getSingleBooking } = require("../../controllers/api");

const router = Router();

router.get("/", getAllBookings);
router.get("/:id", getSingleBooking);

module.exports = router;
