require("dotenv").config();
const { Router } = require("express");
const { getBreeds } = require("../../controllers/getBreeds");
const {getBreedDetail} = require("../../controllers/getBreedDetail")

const breedsRouter = Router();

breedsRouter.get("/", async (req, res) => {
  //gets the breeds that match the query\
  //if query is not provided returns all breedsget breeds
  const { search } = req.query;
  try {
    const result = await getBreeds(search)
    res.status(302).json(result);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
});

breedsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getBreedDetail(id)
    res.status(302).json(result);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
});

module.exports = breedsRouter;
