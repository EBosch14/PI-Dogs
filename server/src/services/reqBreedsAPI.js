const axios = require("axios");
require("dotenv").config;
const { API_URL } = process.env;

const getAllBreedsAPI = async () => {
  //Gets all dog breeds registered in API
  try {
    const response = await axios.get(`${API_URL}/breeds`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getInputBreedAPI = async (search) => {
  //get all breed that match with query
  try {
    const response = await axios.get(`${API_URL}/breeds/search`, {
      params: {
        q: search,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getBreedById = async (id) => {
  //gets breed that match with id
  try {
    const response = await axios.get(`${API_URL}/breeds/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getAllBreedsAPI, getInputBreedAPI, getBreedById };
