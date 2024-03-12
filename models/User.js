const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    minlength: 1,
    require: [true, "Please enter a Name"],
  },
  email: {
    type: String,
    minlength: 5,
    unique: [true, "That email address already exist"],
    validate: {
      validator(value) {
        return validator.isEmail(value);
      },
      message: "You must enter a valid Email address",
    },
    required: [true, "Please add the user email"],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.Model("User", UserSchema);
