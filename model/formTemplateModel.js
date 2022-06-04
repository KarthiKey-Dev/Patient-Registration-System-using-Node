/** @format */

const mongoose = require("mongoose");
const moment = require("moment");
var randomstring = require("randomstring");

const Schema = new mongoose.Schema(
  {
    form_template_id: {
      type: String,
      default: randomstring.generate(12),
      unique: true,
    },
    form_display_name: {
      required: true,
      type: String,
    },
    form_data: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("formTemplate", Schema);
