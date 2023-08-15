const axios = require("axios");
const { transfromDataAPI } = require("../utils/transformData");
require("dotenv").config;
const { API_URL } = process.env;

const getAllBreedsAPI = async () => {
  //Gets all dog breeds registered in API
  try {
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds`);
    const result = transfromDataAPI(response.data);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

//This request returns only the image id, so another request had to be made that was not allowed
//for that reason I decided not to use it

// const getInputBreedAPI = async (search) => {
//   //get all breed that match with query
//   try {
//     const response = await axios.get(`${API_URL}/breeds/search?q=${search}`);
//     const result = transfromDataAPI(response.data);
//     return result;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

//Same situation

// const getBreedById = async (id) => {
//   //gets breed that match with id
//   try {
//     const response = await axios.get(`${API_URL}/breeds/${id}`);
//     const result = transfromDataAPI(response.data);
//     return result;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

module.exports = { getAllBreedsAPI };
