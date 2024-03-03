module.exports.getContacts = (req, res) => {
  res.status(200).json({ message: "success!" });
};

module.exports.createContact = (req, res) => {
  res.status(201).json({ message: "created contact!" });
};

module.exports.updateContact = (req, res) => {
  res.status(200).json({ message: `update contact ${req.params.id}` });
};

module.exports.deleteContact = (req, res) => {
  res.status(200).json({ message: `delete contact ${req.params.id}` });
};
