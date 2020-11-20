const router = require("express").Router();
const gardensController = require("../../controllers/gardenscontroller");


router.route("/")
  .get(gardensController.findAll)
  .post(gardensController.create);


router
  .route("/:id")
  .get(gardensController.findById)
  .put(gardensController.update)
  .delete(gardensController.remove);

router
  .route("/user/:id")
  .get(gardensController.findByUserId)

router
    .route("/addplant/:id/:plants_id")
    .put(gardensController.addplant)

router
    .route("/removeplant/:id/:plants_id")
    .put(gardensController.removeplant)
module.exports = router;
