const router = require("express").Router();
const { UserModel } = require("../models/userSchema");
const bcrypt = require("bcryptjs");
require("dotenv").config();

router.post("/", async (req, res) => {
  try {
    const {error} = req.body;
    if(error){
      return res.status(400).send({ message: error.details[0].massage });
    }

    // Check if the email exists
    const email = req.body.email.toLowerCase();
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(401).send({ message: "Invalid Email or Password!" });
    }

    // Check if the password is correct
    const passwordCheck = await bcrypt.compare(req.body.password, user.password);
    if (!passwordCheck) {
      return res.status(401).json({ message: "Invalid Email or Password!" });
    }

    res.status(201).json({ id: user._id, firstName: user.firstName});

  } catch (error) {
    res.status(500).json({ message: "Internal Sever Error." });
    return;
  }
});

module.exports = router;
