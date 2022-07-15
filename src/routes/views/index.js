const router = require("express").Router();

const {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
  renderBookingsPage,
  renderBikePage,
} = require("../../controllers/views");

// Public Routes
router.get("/", renderHomePage);
router.get("/login", renderLoginPage);
router.get("/signup", renderSignupPage);

// Private Routes
router.get("/bookings", renderBookingsPage);
router.get("/bikes/:id", renderBikePage);

module.exports = router;
