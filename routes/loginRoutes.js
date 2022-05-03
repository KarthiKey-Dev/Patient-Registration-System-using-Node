/** @format */
const express = require("express");
const Model = require("../model/loginModel");

const router = express.Router();

//Post Method
router.post("/auth", async (req, res) => {
  const data = await Model.find();
  console.log("data", data);
  // const data = await new Model({
  //   user_name: req.body.user_name,
  //   user_password: req.body.user_password,
  // });
  // const { error } = validate(req.body);
  // if (error) {
  //   return res.status(400).json({ message: "invalid resquest" });
  // }
  try {
    const user = await data.findOne({ user_name: req.body.user_name });
    if (!user) {
      return res.status(400).json({ message: "incorrect username" });
    }
    // const isMatch = user.user_password === req.body.user_password;
    if (user.user_password !== req.body.user_password) {
      return res.status(400).json({ message: "incorrect password" });
    }
    res.status(200).json({ message: "logged in successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
