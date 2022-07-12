const router = require("express").Router();

const {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
  renderBookingsPage,
  myBookingsPage,
} = require("../../controllers/views");

// Public Routes
router.get("/", renderHomePage);
router.get("/login", renderLoginPage);
router.get("/signup", renderSignupPage);

// Private Routes
router.get("/booking/", renderBookingsPage);
router.get("/booking/:id", myBookingsPage);
// router.get("/bike/", renderBookingPage);
// router.get("/bikes/:id", renderBookingsPage);

module.exports = router;
