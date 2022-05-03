/** @format */
const express = require("express");
const Model = require("../model/caseModel");

const router = express.Router();

//Post Method
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
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/getCaseAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getCaseBy/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/updateCase/:id", async (req, res) => {
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
router.delete("/deleteCase/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(` ${data.patient_name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
