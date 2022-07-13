const router = require("express").Router();

const {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
  renderBookingsPage,
} = require("../../controllers/views");

// Public Routes
router.get("/", renderHomePage);
router.get("/login", renderLoginPage);
router.get("/signup", renderSignupPage);

// Private Routes
router.get("/bookings", renderBookingsPage);

module.exports = router;
