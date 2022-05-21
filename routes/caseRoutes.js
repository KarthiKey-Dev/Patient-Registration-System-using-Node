/** @format */
const express = require("express");
const Model = require("../model/caseModel");

const router = express.Router();

/**
 * TODO
 *
 */

//create new case
router.post("/newCase", async (req, res) => {
  const data = await new Model({
    case_status: req.body.case_status,
    user_id: req.body.user_id,
    created_At: req.body.created_At,
    updated_At: req.body.updated_At,
    patient_name: req.body.patient_name,
    patient_mobile: req.body.patient_mobile,
    patient_aadhar: req.body.patient_aadhar,
    patient_email: req.body.patient_email,
    patient_dob: req.body.patient_dob,
    patient_age: req.body.patient_age,
    patient_weight: req.body.patient_weight,
    patient_height: req.body.patient_height,
    patient_bmi: req.body.patient_bmi,
    patient_rbs: req.body.patient_rbs,
    patient_bp: req.body.patient_bp,
    patient_remarks: req.body.patient_remarks,
  });
  try {
    const dataToSave = await data.save();
    res
      .status(200)
      .json({ message: "case successfully created", user: dataToSave });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all cases
router.get("/getCaseAll", async (req, res) => {
  try {
    const data = await Model.find().sort({ createdAt: -1 });
    res.json({ Result: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get case by userID
router.post("/getCaseByUserId", async (req, res) => {
  try {
    if (req.body.user_id) {
      const data = await Model.find({ user_id: req.body.user_id });
      res.json({ Result: data });
    } else {
      const data = await Model.find();
      res.json({ Result: data });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get case by caseID
router.get("/getCaseBy", async (req, res) => {
  try {
    const data = await Model.findById(req.body.id);
    res.json({ Result: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update case by ID
router.patch("/updateCase", async (req, res) => {
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

//Delete case by ID
router.delete("/deleteCase", async (req, res) => {
  try {
    const id = req.body.id;
    const data = await Model.findByIdAndDelete(id);
    res.json({ message: `${data.patient_name} has been deleted..` });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//case offline sync
router.post("/Sync", async (req, res) => {
  try {
    const dataToSave = await req.body.map((e) => {
      const data = new Model({
        case_status: e.case_status,
        user_id: e.user_id,
        patient_name: e.patient_name,
        patient_mobile: e.patient_mobile,
        patient_aadhar: e.patient_aadhar,
        patient_email: e.patient_email,
        patient_dob: e.patient_dob,
        patient_age: e.patient_age,
        patient_weight: e.patient_weight,
        patient_height: e.patient_height,
        patient_bmi: e.patient_bmi,
        patient_rbs: e.patient_rbs,
        patient_bp: e.patient_bp,
        patient_remarks: e.patient_remarks,
      });
      data.save();
    });
    res.status(200).json({ message: "cases successfully uploaded" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//search case by patient name
router.post("/search-case", async (req, res) => {
  try {
    // const find = await Model.find({ patient_name: req.body.patient_name });
    // res.json(find);
    var regex = new RegExp(req.body.patient_name, "i");
    Model.find({ patient_name: regex }).then((result) => {
      res.json(result);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
