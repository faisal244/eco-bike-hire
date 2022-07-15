const router = require('express').Router();

const {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
  renderBookingsPage,
  renderBikePage,
} = require('../../controllers/views');
const auth = require('../../middlewares/auth');

// Public Routes
router.get('/', renderHomePage);
router.get('/login', renderLoginPage);
router.get('/signup', renderSignupPage);

// Private Routes
router.get('/bookings', auth, renderBookingsPage);
router.get('/bikes/:id', auth, renderBikePage);

module.exports = router;
