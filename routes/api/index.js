const router = require("express").Router();
const plantRoutes = require("./plants.js");

// Book routes
router.use("/plants", plantRoutes);

module.exports = router;
