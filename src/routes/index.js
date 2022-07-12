const router = require("express").Router();

const auth = require("./auth");
const api = require("./api");
const views = require("./viewss");

router.use("/auth", auth);
router.use("/api", api);
router.use("/", views);

module.exports = router;
