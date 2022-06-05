/** @format */

const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    form_template_id: {
      type: String,
      default: mongoose.Types.ObjectId,
      index: { unique: true },
    },
    form_display_name: {
      required: true,
      type: String,
    },
    gender: {
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
