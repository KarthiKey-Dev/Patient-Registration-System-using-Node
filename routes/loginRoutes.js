/** @format */
const express = require("express");
const Model = require("../model/registrationModel");
const Model2 = require("../model/formTemplateModel");
// bcrypt = require("bcrypt");
const router = express.Router();

/**
 * TODO
 * decrypt user password
 * need to add JSON token
 *
 * */

//user login
router.post("/auth", async (req, res) => {
  // const data = await Model.find();
  try {
    const user = await Model.findOne({ user_name: req.body.user_name });
    if (user) {
      // const cmp = await bcrypt.compare(
      //   req.body.user_password,
      //   user.user_password
      // );
      // const isMatch = user.user_password === req.body.user_password;
      const FormTemplate = await Model2.find();
      const cmp = req.body.user_password === user.user_password;
      if (cmp) {
        res.status(200).json({
          message: "Logged In Successfully.",
          User: user,
          AccessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
          form_Templates: FormTemplate,
        });
      } else {
        res.status(400).json({ message: "invalid password." });
      }
    } else {
      res.status(400).json({ message: "invalid username " });
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
});

module.exports = router;
