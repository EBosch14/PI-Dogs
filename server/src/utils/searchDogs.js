const { getAllBreedsAPI } = require("../services/reqBreedsAPI");
const { getAllDogsDB } = require("../services/reqDogsDB");

const searchDogs = async (search) => {
  try {
    const allDogs = await getAllDogsDB();
    if(allDogs.length) {
      const matchedDogs = allDogs.filter((dog) =>
        dog.name.toLowerCase().includes(search.toLowerCase())
      );
      return matchedDogs;
    }
    return []
  } catch (error) {
    throw error;
  }
};

const searchBreeds = async (search) => {
  try {
    const allBreeds = await getAllBreedsAPI();
    const matchedBreeds = allBreeds.filter((breed) =>
      breed.name.toLowerCase().includes(search.toLowerCase())
    );
    return matchedBreeds
  } catch (error) {
    throw error;
  }
};

const getBreedById = async (id) => {
  try {
    const allBreeds = await getAllBreedsAPI();
    const foundBreed = allBreeds.find(el => el.id == id)
    if (foundBreed) return foundBreed
    return {}
  } catch (error) {
    throw error;
  }
}

module.exports = { searchDogs, searchBreeds, getBreedById };
