require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");
const { API_URL, API_KEY } = process.env;

const breedsRouter = Router();

breedsRouter.get("/", async (req, res) => {
  const { search } = req.query;
  try {
    if (!search) {
      const { data } = await axios.get(`${API_URL}/breeds`);
      res.status(200).json(data);
    } else {
      const { data } = await axios.get(`${API_URL}/breeds/search?q=${search}`);
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

breedsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await axios.get(`${API_URL}/breeds/${id}`);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = breedsRouter;
