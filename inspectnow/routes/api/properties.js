const router = require("express").Router();
const propertyController = require("../../controllers/propertyController");

// Matches with "/api/books"
router.route("/")
  .get(propertyController.findAll)
  .post(propertyController.save);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(peropertyController.findOne)
  .delete(propertyController.remove);

module.exports = router;