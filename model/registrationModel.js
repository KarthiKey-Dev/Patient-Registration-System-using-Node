/** @format */

const mongoose = require("mongoose");

const randomString = require("randomstring");

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new mongoose.Schema(
  {
    user_name: {
      required: true,
      type: String,
      unique: true,
    },
    user_email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    org_id: {
      default: randomString.generate(10),
      // required: true,
      type: Number,
    },
    user_position: {
      // required: true,
      type: String,
    },
    user_type: {
      required: true,
      type: String,
    },
    user_password: {
      type: String,
      default: "123456",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
