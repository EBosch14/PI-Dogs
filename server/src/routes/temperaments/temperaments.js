require("dotenv").config();
const axios = require("axios");
const { Router } = require("express");
const { API_URL } = process.env;

const getAllTemps = Router();

getAllTemps.get("/", async (req, res) => {
  try {
    const { data } = await axios.get(`${API_URL}/breeds`);
    const temps = [
      ...new Set(data.flatMap((el) => el.temperament?.split(", "))),
    ];
    const fliterTemps = temps.filter((el) => typeof el === "string");
    res.status(200).json(fliterTemps);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = getAllTemps;
