const router = require("express").Router();

const { getAllBikes, getSingleBike } = require("../../controllers/api");

router.get("/", getAllBikes);
router.get("/:id", getSingleBike);
// router.post("/", createPlaylist);
