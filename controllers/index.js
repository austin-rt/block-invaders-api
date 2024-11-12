const HighScore = require("../models");

const getScores = async (req, res) => {
  try {
    const scores = await HighScore.find({});
    return res.status(200).json(scores);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};

const postScore = async (req, res) => {
  try {
    const { name, score } = req.body;
    const newHighScore = new HighScore({ name, score });
    await newHighScore.save();
    return res.status(201).json(newHighScore);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};

module.exports = { getScores, postScore };
