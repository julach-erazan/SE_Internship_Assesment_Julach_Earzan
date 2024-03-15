const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");


//database connection
require("./db")

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use(express.static('public'));

const port = process.env.PORT || 8001

//routes
app.use('/register', registerRoutes);
app.use('/login', loginRoutes); 


app.listen(port, () => {
  console.log("Server Listnning...", {port});
});
