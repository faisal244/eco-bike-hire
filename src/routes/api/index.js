const router = require("express").Router();
const bikes = require("./bikes");
const bookings = require("./bookings");
router.use("/bookings", bookings);
router.use("/bikes", bikes);
module.exports = router;
