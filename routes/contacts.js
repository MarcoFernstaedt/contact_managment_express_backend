const router = require("express").Router();
const {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contacts");

router.get("/", getContacts);
router.post("/", createContact);
router.put("/:contactId", updateContact);
router.delete("/:contactId", deleteContact);

module.exports = router;
