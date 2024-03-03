const router = require("express").Router();
const { getContacts } = require("../controllers/contacts");

router.get("/", getContacts);

module.exports = router;
