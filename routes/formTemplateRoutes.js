/** @format */

const express = require("express");
const Model = require("../model/formTemplateModel");
const router = express.Router();

router.post("/newForm", async (req, res) => {
  const data = await new Model({
    form_display_name: req.body.form_display_name,
    form_data: req.body.form_data,
  });
  try {
    const save = await data.save();
    res.status(200).json(save);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAllFormTemplate", async (req, res) => {
  try {
    const data = await Model.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/getFormTemplateById", async (req, res) => {
  try {
    const data = await Model.find({
      form_template_id: req.body.form_template_id,
    });
    if (data) {
      res.json(data);
    } else {
      res.json({ message: "Form Template not found" });
    }
    // res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/deleteFromTemplate", async (req, res) => {
  try {
    const id = req.body.id;
    const data = await Model.findOneAndDelete({
      form_template_id: req.body.form_template_id,
    });
    res.send(` ${data.form_display_name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
