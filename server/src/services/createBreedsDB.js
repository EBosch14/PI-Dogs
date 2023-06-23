const { Dogs } = require("../db");

const createBreedsDB = async ({name, image, height, weight,lifeSpan, temperaments}) => {
  try {
    const info = await Dogs.create({
      name,
      image,
      height,
      weight,
      life_span: lifeSpan
    })
  } catch (error) {
    throw new Error("Cloud not load dog breed to Database.")
  }
}

module.exports = { createBreedsDB }