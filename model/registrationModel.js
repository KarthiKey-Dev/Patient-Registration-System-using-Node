/** @format */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_name: {
    required: true,
    type: String,
    unique: true 
  },
  user_password: {
    required: true,
    type: String,
  },
  user_org: {
    // required: true,
    type: String,
  },
  user_position: {
    // required: true,
    type: String,
  },
  user_type: {
    // required: true,
    type: String,
  },
},{
  timestamps: true
});

module.exports = mongoose.model("user", userSchema);
