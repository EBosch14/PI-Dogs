const { getAllBreedsAPI, getBreedById } = require("../services/reqBreedsAPI");
const { getAllDogsDB, getDogById } = require("../services/reqDogsDB");

const getAllBreeds = async () => {
  try {
    const breedsAPI = await getAllBreedsAPI();
    const dogsDB = await getAllDogsDB();
    return [...breedsAPI, ...dogsDB];
  } catch (error) {
    throw error;
  }
};

const getBreedDetail = async (id) => {
  const breedAPI = await getBreedById(id);
  const dogDB = await getDogById(id);
  if (Object.keys(breedAPI).length) return breedAPI;
  if (Object.keys(dogDB).length) return dogDB;
  return {};
};

module.exports = { getAllBreeds, getBreedDetail };
