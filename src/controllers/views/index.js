const moment = require('moment');

const { Bike, Pricing, Booking, User } = require('../../models');
const { getAllBikes } = require('../api/bikes');
const renderHomePage = (req, res) => {
  return res.render('home', {
    isLoggedIn: req.session.isLoggedIn,
    currentPage: 'home',
  });
};

const renderLoginPage = (req, res) => {
  return res.render('login', { currentPage: 'login' });
};

const renderSignupPage = (req, res) => {
  return res.render('signup', { currentPage: 'signup' });
};

const renderBookingsPage = async (req, res) => {
  const bookingFromDb = await Booking.findByPk(req.params.id, {
    include: [
      {
        model: Bike,
      },
    ],
  });
  //const bookingFromDb = await getSingleBooking(req, res);

  const booking = bookingFromDb.get({
    plain: true,
  });
  console.log('bookings:' + JSON.stringify(booking));

  return res.render('bookings', {
    ...booking,
    isLoggedIn: req.session.isLoggedIn,
  });
};

const renderAllBookingsPage = async (req, res) => {
  const bookingFromDb = await Booking.findAll({
    where: {
      userId: req.session.user.id,
    },

    include: [
      {
        model: Bike,
      },
    ],
  });

  const bookings = bookingFromDb.map((Booking) => {
    return Booking.get({ plain: true });
  });
  // array.forEach((element) => {});

  //console.log('ABC' + JSON.stringify(bookings));

  return res.render('dashboard', {
    bookings,
    isLoggedIn: req.session.isLoggedIn,
    currentPage: 'dashboard',
  });
};

const renderProfilePage = async (req, res) => {
  const { id } = req.session.user;

  const profileFromDb = await User.findByPk(id);

  const profile = profileFromDb.get({
    plain: true,
  });
  console.log(profile);

  return res.render('bookingsProfile', {
    currentPage: 'bookingsProfile',
    profile,
    isLoggedIn: req.session.isLoggedIn,
  });
};

const renderBikePage = async (req, res) => {
  const { id } = req.params;

  const bikeFromDb = await Bike.findByPk(id, {
    include: [
      {
        model: Pricing,
      },
    ],
  });

  console.log('bikeFromDb:' + bikeFromDb);

  const bike = bikeFromDb.get({
    plain: true,
  });

  return res.render('bike', {
    bike,
    isLoggedIn: req.session.isLoggedIn,
    currentDate: moment().format('YYYY-MM-DD'),
  });
};

const renderAllBikes = async (req, res) => {
  const bikesFromDb = await Bike.findAll({
    include: [
      {
        model: Pricing,
      },
    ],
  });

  const bikes = bikesFromDb.map((bike) => {
    return bike.get({ plain: true });
  });

  console.log(bikes);
  return res.render('bikes', {
    bikes,
    isLoggedIn: req.session.isLoggedIn,
    currentPage: 'bikes',
  });
};

const renderDashboard = (req, res) => {
  return res.render('dashboard', { currentPage: 'dashboard' });
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
  renderBookingsPage,
  renderBikePage,
  renderDashboard,
  renderAllBikes,
  renderProfilePage,
  renderAllBookingsPage,
};
