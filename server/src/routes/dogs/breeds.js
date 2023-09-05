require("dotenv").config();
const { Router } = require("express");
const { getAllBreeds, getBreedDetail } = require("../../controllers/getBreeds");

const breedsRouter = Router();

breedsRouter.get("/", async (req, res) => {
  //gets the breeds that match the query\
  //if query is not provided returns all breedsget breeds
  try {
    const result = await getAllBreeds()
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(422).json({ error: error.message });
  }
});

breedsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getBreedDetail(id)
    res.status(200).json(result);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
});

module.exports = breedsRouter;
