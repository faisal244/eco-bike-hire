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

	console.log("bikeFromDb:" + bikeFromDb);

	const bike = bikeFromDb.get({
		plain: true,
	});
	//console.log(bike);
	return res.render("bike", {
		bike,
		isLoggedIn: req.session.isLoggedIn,
		currentDate: moment().format("YYYY-MM-DD"),
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
	return res.render("bikes", { bikes });
};

module.exports = {
	renderHomePage,
	renderLoginPage,
	renderSignupPage,
	renderBookingsPage,
	renderBikePage,
	renderAllBikes,
};
