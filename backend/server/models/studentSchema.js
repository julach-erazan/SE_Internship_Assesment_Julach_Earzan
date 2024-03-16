const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentId: { type: String, require: true },
  studentName: { type: String, require: true },
  imagePath: {type: String},
  age: { type: Number, require: true },
  status: { type: String, require: true },
});

const StudentModel = mongoose.model("students", studentSchema);

module.exports = { StudentModel };
