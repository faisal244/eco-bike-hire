const path = require("path");

const renderHomePage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/publicHome.html");
  return res.sendFile(filePath);
};

const renderLoginPage = (req, res) => {
  //return res.render("login", { currentPage: "login" });
};

const renderSignupPage = (req, res) => {
  //return res.render("signup", { currentPage: "signup" });
};
const renderBookingsPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/createPlaylist.html");
  //return res.sendFile(filePath);
};

const renderBookingPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/singlePlaylist.html");
  //return res.sendFile(filePath);
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
  renderBookingsPage,
  renderBookingPage,
};
