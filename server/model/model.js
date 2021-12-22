const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  _id: ObjectId,
  Age: String,
  Sex: String,
  ChestPainType: String,
  RestingBP: String,
  Cholesterol: String,
  FastingBS: String,
  RestingECG: String,
  MaxHR: String,
  ExerciseAngina: String,
  Oldpeak: String,
  ST_Slope: String,
  HeartDisease: String,
});

const Userdb = mongoose.model("userdbs", schema);

module.exports = Userdb;
