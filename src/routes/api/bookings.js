const router = require("express").Router();
const { getAllBookings, getSingleBooking } = require("../../controllers/api");

router.get("/", getAllBookings);
router.get("/:id", getSingleBooking);
//router.post("/", createPlaylist);

module.exports = router;
