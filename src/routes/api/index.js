const { Router } = require("express");

const bikes = require("./bikes");
const bookings = require("./bookings");

const router = Router();

router.use("/bookings", bookings);
router.use("/bikes", bikes);

module.exports = router;
