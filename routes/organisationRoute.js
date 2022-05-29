/** @format */

const express = require("express");
const Model = require("../model/organisationModel");
const router = express.Router();

router.post("/newOrg", async (req, res) => {
  const data = await new Model({
    org_id: req.body.org_id,
    org_name: req.body.org_name,
  });
  try {
    const save = await data.save();
    res.status(200).json(save);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAllOrg", async (req, res) => {
  try {
    const data = await Model.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/getOrgById", async (req, res) => {
  try {
    const data = await Model.find({ org_id: req.body.org_id });
    if (data) {
      res.json(data);
    } else {
      res.json({ message: "Organisation not found" });
    }
    // res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/deleteOrg", async (req, res) => {
  try {
    const id = req.body.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(` ${data.org_name} has been deleted..`);
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
