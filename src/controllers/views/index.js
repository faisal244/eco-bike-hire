const moment = require("moment");

const { Bike, Pricing } = require("../../models");
const { getAllBikes } = require("../api/bikes");

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

const renderAllBikes = async (req, res) => {
	const bikes = await Bike.findAll({});

	// const bike = bike.get({
	// 	plain: true,
	// });
	console.log(bikes);
	return res.render("bikes", bikes);
};

module.exports = {
	renderHomePage,
	renderLoginPage,
	renderSignupPage,
	renderBookingsPage,
	renderBikePage,
	renderAllBikes,
};
