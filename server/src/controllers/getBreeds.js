const { getAllBreedsAPI } = require("../services/reqBreedsAPI");
const { searchDogs, searchBreeds } = require("../utils/searchDogs");

const getBreeds = async (search) => {
  try {
    if (!search) {
      return await getAllBreedsAPI();
    } else {
      const breedsAPI = await searchBreeds(search);
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
