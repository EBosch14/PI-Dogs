const { fetchAllDogs, fetchDogById } = require("../utils/fetchingDataAPI");
const { cleanDataAPI } = require("../utils/transformData");

const getAllBreedsAPI = async () => {
  //Gets all dog breeds registered in API
  try {
    const dogs = await fetchAllDogs();
    const cleanedData = cleanDataAPI(dogs);
    return cleanedData;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getBreedById = async (id) => {
  try {
    const breed = await fetchDogById(id);
    if (Object.keys(breed).length) {
      const cleanedData = await cleanDataAPI([breed]);
      return cleanedData[0];
    }
    return breed;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllBreedsAPI, getBreedById };
