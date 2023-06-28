const { getBreedById } = require("../services/reqBreedsAPI");

const getBreedDetail = async (id) => {
  try {
    const breed = await getBreedById(id);
    if (!Object.keys(breed).length)
      throw new Error(`No matches found for id: ${id}`);
    return breed;
  } catch (error) {
    throw error;
  }
};

module.exports = { getBreedDetail };
