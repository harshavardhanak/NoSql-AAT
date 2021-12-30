const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  _id: ObjectId,
  name: String,
  mfr: String,
  type: String,
  calories: String,
  protein: String,
  fat: String,
  sodium: String,
  fiber: String,
  carbo: String,
  sugars: String
});

const Userdb = mongoose.model("userdbs2", schema);

module.exports = Userdb;
