/** @format */

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
const routes = require("./routes/userRoutes");
var bodyParser = require("body-parser");

const app = express();
var jsonParser = bodyParser.json();
app.use(jsonParser);

app.use("/api", routes);

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
