/** @format */
const express = require("express");
const Model = require("../model/loginModel");
bcrypt = require("bcrypt");
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
    if (user) {
      const cmp = await bcrypt.compare(
        req.body.user_password,
        user.user_password
      );
      // const isMatch = user.user_password === req.body.user_password;
      if (cmp) {
        res.send("Auth Successful");
      } else {
        res.send("Wrong username or password.");
      }
    } else {
      res.send("Wrong username or password.");
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
});

module.exports = router;
