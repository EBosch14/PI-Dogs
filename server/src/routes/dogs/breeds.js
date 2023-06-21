require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");
const { API_URL, API_KEY } = process.env;

const breedsRouter = Router();

breedsRouter.get("/", async (req, res) => {
  try {
    const { data } = await axios.get(`${API_URL}/breeds`);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error });
  }
});

breedsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const {data} = await axios.get(`${API_URL}/breeds/${id}`)
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error)
  }
});

module.exports = breedsRouter;
