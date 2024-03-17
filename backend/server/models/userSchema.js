const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  phoneNumber: { type: Number, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

const UserModel = mongoose.model("users", userSchema);

module.exports = { UserModel };
