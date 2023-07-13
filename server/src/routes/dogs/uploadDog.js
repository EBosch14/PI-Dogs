const { Router } = require("express");
const { postDog } = require("../../controllers/postDog");

const uploadRouter = Router();

uploadRouter.post("/", async (req, res) => {
  const info = req.body;
  const {image} = req.files
  info.image = image
  try {
    const result = await postDog(info);
    res.status(201).json(result);
  } catch (error) {
    res.status(412).json({ error: error.message });
  }
});

module.exports = uploadRouter;
