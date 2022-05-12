/** @format */

const mongoose = require("mongoose");

var randomstring = require("randomstring");

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
    user_org: {
      // required: true,
      type: String,
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
      // default: randomstring.generate(10),
      default: "1234",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
