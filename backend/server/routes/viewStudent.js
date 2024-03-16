const router = require("express").Router();
const { StudentModel } = require("../models/studentSchema");

router.get("/", async (req, res) => {
  try {
    const { error } = req.body;
    if (error) {
      return res.status(400).send({ message: error.details[0].massage });
    }

    const student = await StudentModel.find();

    res.status(201).json({ data: student });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
});

module.exports = router;
