const path = require('path');

const renderHomePage = (req, res) => {
  //   //const filePath = path.join(__dirname, "../../../public/publicHome.html");
  //   return res.sendFile(filePath);
  return res.render('signup');
};

const renderLoginPage = (req, res) => {
  //   return res.render("login", { currentPage: "login" });
  return res.render('Login');
};

const renderSignupPage = (req, res) => {
  return res.render('signup', { currentPage: 'signup' });

  // return res.render("Signup");
};

const renderBikesPage = (req, res) => {
  //   const filePath = path.join(__dirname, "../../../public/dashboard.html");
  //   return res.sendFile(filePath);
  return res.render('BikesPage');
};

const renderBikePage = (req, res) => {
  //   const filePath = path.join(__dirname, "../../../public/dashboard.html");
  //   return res.sendFile(filePath);
  return res.render(' BikePAge');
};

const renderBookingsPage = (req, res) => {
  const filePath = path.join(__dirname, '../../../public/createPlaylist.html');
  return res.sendFile(filePath);
  return res.render('Bookings');
};

const myBookingsPage = (req, res) => {
  const filePath = path.join(__dirname, '../../../public/singlePlaylist.html');
  return res.render('booking');
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
  renderBikesPage,
  renderBikePage,
  renderBookingsPage,
  myBookingsPage,
};
