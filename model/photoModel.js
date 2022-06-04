/** @format */

const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    photo_id: {
      type: String,
      default: mongoose.Types.ObjectId,
      index: { unique: true },
    },
    photo_url: {
      required: true,
      type: String,
    },
    creator_id: {
      type: String,
      required: true,
    },
    form_id: {
      type: String,
      required: true,
    },
    form_local_id: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("photo", Schema);
