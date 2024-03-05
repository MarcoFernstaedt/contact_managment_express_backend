const mongoose = require("mongoose");
const validator = require("validator");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: [true, "Please add the contact name"],
    },
    email: {
      type: String,
      minlength: 2,
      maxlength: 100,
      unique: true,
      validate: {
        validator(value) {
          return validator.isEmail(value);
        },
        message: "Yout must enter a valid Email address",
      },
      required: [true, "Please add the contact email"],
    },
    phone: {
      type: String,
      minlength: 10,
      maxlength: 15,
      unique: true,
      required: [true, "Please add the contact phone"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
);

module.exports = mongoose.model('Contact', contactSchema)