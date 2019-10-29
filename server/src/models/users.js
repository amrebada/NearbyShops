const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email: mongoose.SchemaTypes.String,
  password: mongoose.SchemaTypes.String,
  role: mongoose.SchemaTypes.Number
});

module.exports = mongoose.model("users", schema);
