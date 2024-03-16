const router = require("express").Router();
const { StudentModel } = require("../models/studentSchema");

router.post("/", async (req, res) => {
  try {
    const { error } = req.body;
    if (error) {
      return res.status(400).send({ message: error.details[0].massage });
    }

    await StudentModel.findOneAndDelete({_id: req.body.id});

    res.status(201).json({ message: "Student Record Delete Successfully!" });

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
});

module.exports = router;