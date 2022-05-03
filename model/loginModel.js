/** @format */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_name: {
    required: true,
    type: String,
  },
  user_password: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);
