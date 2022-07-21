const router = require('express').Router();

const {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
  renderBookingsPage,
  renderBikePage,
  renderDashboard,
  renderAllBikes,
  renderProfilePage,
  renderAllBookingsPage,
} = require('../../controllers/views');

const auth = require('../../middlewares/auth');

// Public Routes
router.get('/', renderHomePage);
router.get('/login', renderLoginPage);
router.get('/signup', renderSignupPage);
router.get('/bikes', renderAllBikes);

// Private Routes
router.get('/dashboard', auth, renderAllBookingsPage);
router.get('/bookings/:id', auth, renderBookingsPage);
router.get('/bookingsProfile/:id', auth, renderProfilePage);
router.get('/bookingsProfile/id', renderProfilePage);
router.get('/bikes/:id', auth, renderBikePage);

module.exports = router;
