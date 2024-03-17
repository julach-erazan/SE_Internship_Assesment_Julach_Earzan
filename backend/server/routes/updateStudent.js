const router = require("express").Router();
const { StudentModel } = require("../models/studentSchema");
const multer = require("multer");
const path = require("path");

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/Images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.filename + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

router.post("/", upload.single("imagePath"), async (req, res) => {
  try {
    const user = await StudentModel.findOne({ _id: req.body.id, studentId: req.body.studentId });

    if (!user) {
      res.status(401).json({ message: "Student id already exists!" });
      return;
    }

    await StudentModel.updateOne({_id: req.body.id}, { $set: { ...req.body, imagePath: req.file.filename }});
    res.status(201).json({ message: "Update Successfully" });

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
});

module.exports = router;