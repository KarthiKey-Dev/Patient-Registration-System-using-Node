/** @format */

const express = require("express");
const Model = require("../model/formModel");
const router = express.Router();

router.post("/newForm", async (req, res) => {
  const data = await new Model({
    form_template_id: req.body.form_template_id,
    user_id: req.body.user_id,
    form_data: req.body.form_data,
    form_displayname: req.body.form_displayname,
    case_local_id: req.body.case_local_id,
    form_local_id: req.body.form_local_id,
    case_id: req.body.case_id,
  });
  try {
    const save = await data.save();
    res
      .status(200)
      .json({ message: "form created successfully", Response: save });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/updateForm", async (req, res) => {
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

router.get("/getAllForm", async (req, res) => {
  try {
    const data = await Model.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/getFormById", async (req, res) => {
  try {
    const data = await Model.find({ form_id: req.body.form_id });
    if (data) {
      res.json(data);
    } else {
      res.json({ message: "form not found" });
    }
    // res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/deleteForm", async (req, res) => {
  try {
    const id = req.body.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(` ${data.form_displayname} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// router.post("/OrgAdduser", async (req, res) => {
//   try {
//     res.send(result);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

module.exports = router;
