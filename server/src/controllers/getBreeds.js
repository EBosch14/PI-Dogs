const { getAllBreedsAPI } = require("../services/reqBreedsAPI");
const { getAllDogsDB } = require("../services/reqDogsDB");
const { searchDogs, searchBreeds } = require("../utils/searchDogs");

const getBreeds = async (search) => {
  try {
    if (!search) {
      const breedsAPI = await getAllBreedsAPI()
      const dogsDB = await getAllDogsDB()
      return [...breedsAPI, ...dogsDB];
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
