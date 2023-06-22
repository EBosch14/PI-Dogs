const { Router } = require("express");
const { getAllTemps } = require("../../controllers/getAllTemps");

const getTemperaments = Router();

getTemperaments.get("/", async (req, res) => {
  try {
    const result = await getAllTemps();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = getTemperaments;
