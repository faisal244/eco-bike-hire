const router = require("express").Router();
const {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
  renderBookingsPage,
  renderBookingPage,
} = require("../../controllers/views");

router.get("/", renderHomePage);
router.get("/login", renderLoginPage);
router.get("/signup", renderSignupPage);
router.get("/booking/", renderBookingsPage);
router.get("/booking/:id", renderBookingPage);
router.get("/bike/", renderBooking);
router.get("/bikes/:id", renderBooking);

module.exports = router;
