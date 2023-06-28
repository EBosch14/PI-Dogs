const {
  getAllBreedsAPI,
  getInputBreedAPI,
} = require("../services/reqBreedsAPI");
const { searchDogs } = require("../utils/searchDogs");

const getBreeds = async (search) => {
  try {
    if (!search) {
      return await getAllBreedsAPI();
    } else {
      const breedsAPI = await getInputBreedAPI(search);
      const dogsDB = await searchDogs(search);
      if (!breedsAPI.length && !dogsDB.length)
        throw new Error(`No matches found for '${search}'`);
      return [...breedsAPI, ...dogsDB];
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { getBreeds };
