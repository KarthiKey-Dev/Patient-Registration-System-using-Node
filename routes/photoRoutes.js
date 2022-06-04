/** @format */

const express = require("express");
const Model = require("../model/photoModel");
const router = express.Router();

router.post("/savePhoto", async (req, res) => {
  const data = await new Model({
    photo_url: req.body.photo_url,
    creator_id: req.body.creator_id,
    form_id: req.body.form_id,
    form_local_id: req.body.form_local_id,
  });
  try {
    const save = await data.save();
    res.status(200).json(save);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/getPhotoByFormId", async (req, res) => {
  try {
    const data = await Model.find({ form_id: req.body.form_id });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/getPhotoById", async (req, res) => {
  try {
    const data = await Model.find({ photo_id: req.body.photo_id });
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

router.delete("/deletePhoto", async (req, res) => {
  try {
    const id = req.body.id;
    const data = await Model.findOneAndDelete({ photo_id: req.body.photo_id });
    res.send(` ${data.photo_id} has been deleted..`);
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
