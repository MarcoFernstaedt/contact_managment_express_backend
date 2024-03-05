const Contact = require("../models/contactModel.js");

// @desc get all contacts
// @route GET /contacts
const getContacts = (req, res) => {
  return Contact.find({})
    .then((contacts) => {
      res.status(200).json(contacts);
    })
    .catch((err) => {
      console.log(err);
    });
};

// @desc get specified contact
// @route GET /contacts/:contactId
const getContact = (req, res) => {
  return Contact.findById(req.params.contactId)
    .then((contact) => {
      if (!contact) {
        res.status(484).json({ message: "Contact Not Found." });
      }
      res.status(200).json(contact);
    })
    .catch((err) => {
      console.error(err);
    });
};

// @desc create all contacts
// @route POST /contacts
const createContact = (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }
  return Contact.create({ name, email, phone })
    .then((contact) => {
      res.status(201).send(contact);
      ß;
    })
    .catch((err) => {
      console.error(err);
    });
};

// @desc update a contact
// @route PUT /contacts/:contactId
const updateContact = (req, res) => {
  return Contact.findByIdAndUpdate(req.params.contactId, req.body, {
    new: true,
  })
    .then((contact) => {
      if (!contact) {
        res.status(484).json({ message: "Contact Not Found." });
      }
      res.status(200).json(contact);
    })
    .catch((err) => {
      console.error(err);
    });
};

// @desc delete a contact
// @route DELETE /contacts/:contactId
const deleteContact = (req, res) => {
  return Contact.findByIdAndDelete(req.params.contactId)
    .then((contact) => {
      if (!contact) {
        res.status(404).json({ message: "Contact Not Found." });
      }
      res.status(200).json({ message: `delete contact ${contact}` });
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
