const { Router } = require("express");

const getAllTemps = Router();

getAllTemps.get("/", (req, res) => {
  res.status(200).json("Here are all the temperaments");
});

module.exports = getAllTemps;
