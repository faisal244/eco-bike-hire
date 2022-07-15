const { Router } = require("express");

const {
  getAllBookings,
  getSingleBooking,
  createBooking,
} = require("../../controllers/api/bookings");

const router = Router();

router.get("/", getAllBookings);
router.get("/:id", getSingleBooking);
router.post("/", createBooking);

module.exports = router;
