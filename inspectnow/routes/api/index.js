const router = require("express").Router();
const propertyRoutes = require("./properties");

// Book routes
router.use("/books", propertyRoutes);

module.exports = router;