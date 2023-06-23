const { getBreedById } = require("../services/reqBreedsAPI");

const getBreedDetail = async (id) => {
  const breed = await getBreedById(id);
  if (!Object.keys(breed).length) throw new Error(`No matches found for id: ${id}`)
  return breed;
};

module.exports = { getBreedDetail };
