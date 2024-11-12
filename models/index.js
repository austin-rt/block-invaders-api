const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HighScore = new Schema(
  {
    name: { type: String, required: true },
    score: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HighScore", HighScore);
