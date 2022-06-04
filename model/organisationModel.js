/** @format */

const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    org_id: {
      type: String,
      default: mongoose.Types.ObjectId,
      index: { unique: true },
    },
    org_name: {
      required: true,
      type: String,
    },
    total_users: {
      type: Number,
      default: 0,
    },
    org_users: {
      type: [Object],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("organisation", Schema);
