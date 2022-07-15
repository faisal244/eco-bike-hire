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

const renderBikePage = (req, res) => {
  return res.render("bike");
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
  renderBookingsPage,
  renderBikePage,
};
