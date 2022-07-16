const { Router } = require("express");
const { login, signup, logout, booking } = require("../../controllers/auth");

const router = Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
router.post("/booking/:id", booking);

module.exports = router;
