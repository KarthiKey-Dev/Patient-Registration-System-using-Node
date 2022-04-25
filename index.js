/** @format */

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const routes = require("./routes/routes");
var bodyParser = require("body-parser");

const app = express();
var jsonParser = bodyParser.json();
app.use(jsonParser);

app.use("/api", routes);
var settings = {
  // reconnectTries : Number.MAX_VALUE,
  autoReconnect: true,
};
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
app.use(express.json());

app.listen(4000, () => {
  console.log(`Server Started at ${4000}`);
});
