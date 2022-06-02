/** @format */
const express = require("express");
const Model = require("../model/registrationModel");
// const bcrypt = require("bcryptjs");
const router = express.Router();
// const saltRounds = 10;

/**
 * TODO
 * need to encrypt user password
 *
 */

// new user registration
router.post("/create", async (req, res) => {
  try {
    const data = await new Model({
      user_name: req.body.user_name,
      // user_password: req.body.user_password,
      user_email: req.body.user_email,
      org_id: req.body.org_id,
      user_position: req.body.user_position,
      user_type: req.body.user_type,
    });
    const dataToSave = await data.save();
    res
      .status(200)
      .json({ message: "user successfully created", user: dataToSave });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all users
router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get user by id
router.get("/getOne", async (req, res) => {
  try {
    const data = await Model.findById(req.body.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update user by ID
router.patch("/update", async (req, res) => {
  try {
    const id = req.body.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);
    res.json({ message: "case updated successfully", Result: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete user by ID
router.delete("/delete", async (req, res) => {
  try {
    const id = req.body.id;
    const data = await Model.findByIdAndDelete(id);
    res.json({ message: `${data.patient_name} has been deleted..` });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
