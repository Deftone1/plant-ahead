const router = require("express").Router();
const plantsController = require("../../controllers/plantsController");


router.route("/")
  .get(plantsController.findAll)
  .post(plantsController.create);


router
  .route("/:id")
  .get(plantsController.findById)
  .put(plantsController.update)
  .delete(plantsController.remove);

router
  .route("/user/:id")
  .get(plantsController.findByUserId)
  .delete(plantsController.deletebyuserid)
module.exports = router;
