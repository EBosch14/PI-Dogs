const { Router } = require("express");
const { postDog } = require("../../controllers/postDog");

const uploadRouter = Router();

uploadRouter.post("/", async (req, res) => {
  const info = req.body;
  try {
    const result = await postDog(info);
    res.status(200).json(result);
  } catch (error) {
    res.status(410).json({ error: error.message });
  }
});

module.exports = uploadRouter;
