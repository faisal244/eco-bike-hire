const { Router } = require("express");

const {
  getAllBookings,
  getSingleBooking,
  createBooking,
  validateBooking,
} = require("../../controllers/api/bookings");

const router = Router();

router.get("/", getAllBookings);
router.get("/:id", getSingleBooking);
router.post("/", createBooking);
router.post("/validate", validateBooking);

module.exports = router;
