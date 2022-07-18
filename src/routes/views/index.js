const router = require("express").Router();

const {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
  renderBookingsPage,
  renderBikePage,
  renderDashboard,
  renderAllBikes,
} = require("../../controllers/views");
const auth = require("../../middlewares/auth");

// Public Routes
router.get("/", renderHomePage);
router.get("/login", renderLoginPage);
router.get("/signup", renderSignupPage);
router.get("/bikes", renderAllBikes);

// Private Routes
router.get("/bookings", auth, renderBookingsPage);
router.get("/bikes/:id", auth, renderBikePage);
router.get("/dashboard", auth, renderDashboard);

module.exports = router;
