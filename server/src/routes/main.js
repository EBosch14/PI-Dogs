const { Router } = require("express");
const dogsRoutes = require("./dogs/main");
const temperamentsRoutes = require("./temperaments/main");

const routes = Router();

routes.use("/dogs", dogsRoutes);
routes.use("/temperaments", temperamentsRoutes);

module.exports = routes;
