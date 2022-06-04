/** @format */

require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;

const registeruser = require("./routes/registrationRoutes");
const cases = require("./routes/caseRoutes");
const login = require("./routes/loginRoutes");
const organisation = require("./routes/organisationRoute");
const formTemplate = require("./routes/formTemplateRoutes");
const photo = require("./routes/photoRoutes");
// const offlineSync = require("./routes/caseRoutes");

var bodyParser = require("body-parser");

const app = express();
var jsonParser = bodyParser.json();
app.use(jsonParser);
app.use(cors());

app.use("/case/", cases);
app.use("/user/", registeruser);
app.use("/login/", login);
app.use("/org/", organisation);
app.use("/formTemplate/", formTemplate);
app.use("/photo/", photo);

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
