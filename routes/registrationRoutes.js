/** @format */
const express = require("express");
const Model = require("../model/registrationModel");
const bcrypt = require("bcryptjs");
const router = express.Router();

//Post Method
router.post("/create", async (req, res) => {
  // const data = await new Model({
  //   user_name: req.body.user_name,
  //   user_password: req.body.user_password,
  //   user_org: req.body.user_org,
  //   user_position: req.body.user_position,
  //   user_type: req.body.user_type,
  // });
  try {
    const encryptedPassword = await bcrypt.hash(req.body.user_password, 10);
    const user = await Model.findOne({ email: req.body.user_name });
    if (user) {
      return res.status(400).json("username already exist");
    }
    const newUser = new Model({
      user_name: req.body.user_name,
      user_password: encryptedPassword,
      user_org: req.body.user_org,
      user_position: req.body.user_position,
      user_type: req.body.user_type,
    });
    const dataToSave = await newUser.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(` ${data.user_name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
