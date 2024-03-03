const router = require("express").Router();
// Importing routes
const contactRoutes = require('./contacts');
// Importing error codes
// const { NOT_FOUND } = require("../utils/errors");

// Routes
router.get("/contacts", contactRoutes);

// Catch-all non-existant routes.
router.use("*", (req, res) => {
  res.status(404).json({ message: "Requested resource not found" });
});

module.exports = router;
