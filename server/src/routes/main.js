const { Router } = require("express");
const breedsRouter = require("./breeds");
const favoritesRouter = require("./favorites");
const uploadRouter = require("./uploadDog");

const routes = Router();

routes.use("/breeds", breedsRouter);
routes.use('/favorites', favoritesRouter)
routes.use('/upload', uploadRouter)

module.exports = routes;
