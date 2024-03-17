const express = require("express");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();

const { UserModel } = require("./models/userSchema");

const app = express();

const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");
const addStudentRoutes = require("./routes/addStudent");
const viewStudentRoutes = require("./routes/viewStudent");
const deleteStudentRoutes = require("./routes/deleteStudent");
const updateStudentRoutes = require("./routes/updateStudent");

//database connection
require("./db");

const port = process.env.PORT || 8001;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

app.use(
  session({
    secret: "afFHSgdV18$vbdMdsg7",
    resave: false,
    saveUninitialized: false,
  })
);

//set passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
      callbackURL: "http://localhost:8001/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await UserModel.findOne({
          email: profile.emails[0].value,
        });

        if (!user) {
          user = new UserModel({
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            phoneNumber: null,
            email: profile.emails[0].value,
            password: null,
          });
          await user.save();
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
      // return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

//routes
app.use("/register", registerRoutes);
app.use("/login", loginRoutes);
app.use("/addstudent", addStudentRoutes);
app.use("/viewstudent", viewStudentRoutes);
app.use("/deletestudent", deleteStudentRoutes);
app.use("/updatestudent", updateStudentRoutes);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/",
  }),
  (req, res) => {
    const id = req.user._id;
    const firstName = req.user.firstName;
    res.redirect(`http://localhost:3000/dashboard?id=${id}&firstName=${firstName}`);
  }
);

app.listen(port, () => {
  console.log("Server Listnning...", { port });
});
