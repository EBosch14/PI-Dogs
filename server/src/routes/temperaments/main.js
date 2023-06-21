const { Router } = require("express");
const getAllTemps = require("./temperaments");

const temperamentsRouter = Router();

temperamentsRouter.use("/", getAllTemps);

module.exports = temperamentsRouter;
