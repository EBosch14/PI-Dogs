const { Router } = require("express");
const breedsRouter = require("./breeds");
const favoritesRouter = require("./favorites");
const uploadRouter = require("./uploadDog");
const searchRouter = require("./searchDog");

const dogsRoutes = Router();

dogsRoutes.use("/breeds", breedsRouter);
dogsRoutes.use("/favorites", favoritesRouter);
dogsRoutes.use("/upload", uploadRouter);
dogsRoutes.use("/name", searchRouter);

module.exports = dogsRoutes;
