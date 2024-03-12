const router = require("express").Router();
const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contacts");
const validateToken = require("../middleware/validateToken");

router.use(validateToken);
router.get("/", getContacts);
router.get("/:contactId", getContact);
router.post("/", createContact);
router.put("/:contactId", updateContact);
router.delete("/:contactId", deleteContact);

module.exports = router;
