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
  AccessToken: {
    type: String,
    default: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  },
});

module.exports = mongoose.model("user", userSchema);
