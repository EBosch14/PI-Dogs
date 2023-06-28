const { getDogById } = require("../services/reqDogsDB");
const { getBreedById } = require("../utils/searchDogs");

const getBreedDetail = async (id) => {
  try {
    const breedAPI = await getBreedById(id);
    const dogDB = await getDogById(id);
    if (Object.keys(breedAPI).length) return breedAPI;
    if (Object.keys(dogDB).length) return dogDB;
    throw new Error(`No matches found for id: ${id}`);
  } catch (error) {
    throw error;
  }
};

module.exports = { getBreedDetail };
