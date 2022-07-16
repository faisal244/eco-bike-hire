const moment = require("moment");

const { Bike, Pricing } = require("../../models");

const renderHomePage = (req, res) => {
  return res.render("home");
};

const renderLoginPage = (req, res) => {
  return res.render("login");
};

const renderSignupPage = (req, res) => {
  return res.render("signup", { currentPage: "signup" });
};

const renderBookingsPage = (req, res) => {
  return res.render("bookings");
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

  const bike = bikeFromDb.get({
    plain: true,
  });

  return res.render("bike", {
    bike,
    isLoggedIn: req.session.isLoggedIn,
    currentDate: moment().format("YYYY-MM-DD"),
  });
};

const renderDashboard = (req, res) => {
  return res.render("dashboard");
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
  renderBookingsPage,
  renderBikePage,
  renderDashboard,
};
