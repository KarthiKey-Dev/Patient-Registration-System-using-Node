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
  user_org: {
    required: true,
    type: String,
  },
  user_position: {
    required: true,
    type: String,
  },
  user_type: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("datas", userSchema);
