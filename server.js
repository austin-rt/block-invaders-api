require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const db = require("./db");

const cors = require("cors");
const logger = require("morgan");
const { getScores, postScore } = require("./controllers");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/api", routes);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/api/scores", getScores);

app.post("/api/scores", postScore);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
