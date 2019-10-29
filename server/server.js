const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const config = require("./config.json");
const routes = require("./src/routes/index");
const ApiResponse = require("./src/models/constants/ApiResponse");
const ApiError = require("./src/models/constants/ApiError");
const ErrorTypes = require("./src/models/constants/ErrorTypes");

const cors = require("cors");

//- Midlewares

//for enabling connect from other servers
app.use(
  cors({
    origin: "*"
  })
);

//parsing request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Adding all routes
app.use("/api/v1", routes);

//in case of 404 not found
app.all("*", (req, res) => {
  res
    .status(404)
    .json(
      ApiResponse(null, ApiError(ErrorTypes.NOT_FOUND, "Resource not found"))
    );
});

//Database
mongoose.connect(config.DB_URL, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("connected to Database successfully");
});

//Start server on port 4000
app.listen(4000, () => {
  console.log("Nearby shops app listening on port 4000!");
});
