const { Router } = require("express");

const searchRouter = Router();

searchRouter.get("/", (req, res) => {
  const { name } = req.query;
  res.status(200).json(`Results of ${name}`);
});

module.exports = searchRouter;
