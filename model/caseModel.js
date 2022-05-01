/** @format */

const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
  case_status: {
    required: true,
    type: String,
  },
  user_created_by: {
    required: true,
    type: Number,
  },
  patient_name: {
    required: true,
    type: String,
  },
  patient_mobile: {
    required: true,
    type: String,
  },
  patient_aadhar: {
    required: true,
    type: String,
  },
  patient_email: {
    required: true,
    type: String,
  },
  patient_dob: {
    required: true,
    type: String,
  },
  patient_age: {
    required: true,
    type: String,
  },
  patient_weight: {
    required: true,
    type: String,
  },
  patient_height: {
    required: true,
    type: String,
  },
  patient_bmi: {
    required: true,
    type: String,
  },
  patient_rbs: {
    required: true,
    type: String,
  },
  patient_bp: {
    required: true,
    type: String,
  },
  patient_remarks: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Casedata", caseSchema);