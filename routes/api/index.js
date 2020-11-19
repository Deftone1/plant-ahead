const router = require("express").Router();
const plantRoutes = require("./plants");
const gardenRoutes = require("./gardens")

router.use("/plants", plantRoutes);
router.use("/gardens", gardenRoutes);

module.exports = router;
