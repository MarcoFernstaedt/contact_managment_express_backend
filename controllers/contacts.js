const Contact = require("../models/contactModel.js");

// @desc Get all contacts
// @route GET /contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json({ contacts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// @desc Get specified contact
// @route GET /contacts/:contactId
const getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.contactId);
    if (!contact) {
      return res.status(404).json({ message: "Contact Not Found" });
    }
    res.status(200).json(contact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// @desc Create a contact
// @route POST /contacts
const createContact = async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const contact = await Contact.create({ name, email, phone, user_id: req.user.id });
    res.status(201).json(contact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// @desc Update a contact
// @route PUT /contacts/:contactId
const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.contactId);
    if (!contact) {
      return res.status(404).json({ message: "Contact Not Found" });
    }
    if (contact.user_id.toString() !== req.user.id) {
      return res.status(403).json({ error: "You cannot update this contact" });
    }
    const updatedContact = await Contact.findByIdAndUpdate(req.params.contactId, req.body, { new: true });
    res.status(200).json(updatedContact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// @desc Delete a contact
// @route DELETE /contacts/:contactId
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.contactId);
    if (!contact) {
      return res.status(404).json({ message: "Contact Not Found" });
    }
    if (contact.user_id.toString() !== req.user.id) {
      return res.status(403).json({ error: "You cannot delete this contact" });
    }
    await Contact.findByIdAndDelete(req.params.contactId);
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
