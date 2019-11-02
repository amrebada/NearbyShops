const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  location: [String],
  photo: String,
  likes: [mongoose.SchemaTypes.ObjectId],
  dislikes: [mongoose.SchemaTypes.ObjectId]
});

module.exports = mongoose.model("shops", schema);
