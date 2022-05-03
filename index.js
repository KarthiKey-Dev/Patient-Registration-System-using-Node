/** @format */

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;

const registrationRoutes = require("./routes/registrationRoutes");
const caseRoutes = require("./routes/caseRoutes");
const loginRoutes = require("./routes/caseRoutes");
// const offlineSync = require("./routes/caseRoutes");

var bodyParser = require("body-parser");

const app = express();
var jsonParser = bodyParser.json();
app.use(jsonParser);

app.use("/register/", registrationRoutes);
app.use("/case/", caseRoutes);
app.use("/login/", loginRoutes);

mongoose.connect(uri);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(express.json());
// const port = 3000;
const port = process.env.PORT || 3000;
app.listen(port);
