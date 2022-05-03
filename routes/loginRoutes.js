/** @format */
const express = require("express");
const Model = require("../model/registrationModel");
// bcrypt = require("bcrypt");
const router = express.Router();

//Post Method
router.post("/auth", async (req, res) => {
  const data = await Model.find();

  try {
    const user = await Model.findOne({ user_name: req.body.user_name });
    if (user) {
      // const cmp = await bcrypt.compare(
      //   req.body.user_password,
      //   user.user_password
      // );
      // const isMatch = user.user_password === req.body.user_password;
      const cmp = req.body.user_password === user.user_password;
      if (cmp) {
        res.send("Auth Successful");
      } else {
        res.send("invalid password.");
      }
    } else {
      res.send("invalid username ");
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
});

module.exports = router;
