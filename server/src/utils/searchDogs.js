const { getAllBreedsAPI } = require("../services/reqBreedsAPI");
const { getAllDogsDB } = require("../services/reqDogsDB");

const searchDogs = async (search) => {
  try {
    const allDogs = await getAllDogsDB();
    const matchedDogs = allDogs.filter((dog) =>
      dog.name.toLowerCase().includes(search.toLowerCase())
    );
    return matchedDogs;
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
    const foundBreed = allBreeds.filter(breed => (breed.id == id))
    return foundBreed
  } catch (error) {
    throw error;
  }
}

module.exports = { searchDogs, searchBreeds, getBreedById };
