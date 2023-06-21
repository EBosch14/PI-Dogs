const { Router, json } = require("express");

const breedsRouter = Router();

breedsRouter.get("/", (req, res) => {
  res.status(200).json("show all breeds.");
});

breedsRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json(`Show ${id} breed`);
});

module.exports = breedsRouter;
