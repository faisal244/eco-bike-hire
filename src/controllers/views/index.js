const { Bike } = require('../../models');

const renderHomePage = (req, res) => {
  return res.render('home');
};

const renderLoginPage = (req, res) => {
  return res.render('login');
};

const renderSignupPage = (req, res) => {
  return res.render('signup', { currentPage: 'signup' });
};

const renderBookingsPage = (req, res) => {
  return res.render('bookings');
};

const renderBikePage = async (req, res) => {
  const { id } = req.params;
  const bikeFromDb = await Bike.findByPk(id);
  
  const bike = bikeFromDb.get({
    plain: true,
  });
  console.log(bike);

  return res.render('bike',{bike});
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
  renderBookingsPage,
  renderBikePage,
};
