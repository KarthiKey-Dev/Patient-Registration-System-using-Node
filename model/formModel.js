/** @format */

const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    form_id: {
      type: String,
      default: mongoose.Types.ObjectId,
      index: { unique: true },
    },
    form_template_id: {
      type: String,
    },
    user_id: {
      type: String,
      required: true,
    },
    form_data: {
      type: String,
      required: true,
    },
    form_displayname: {
      type: String,
      required: true,
    },
    case_id: {
      type: String,
    },
    case_local_id: {
      type: String,
    },
    form_local_id: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("form", Schema);
