const axios = require("axios");
const { transfromDataAPI } = require("../utils/transformData");
require("dotenv").config;
const { API_URL } = process.env;

const getAllBreedsAPI = async () => {
  //Gets all dog breeds registered in API
  try {
    const response = await axios.get(`${API_URL}/breeds`);
    const result = transfromDataAPI(response.data)
    return result;
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
    const result = transfromDataAPI(response.data)
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getBreedById = async (id) => {
  //gets breed that match with id
  try {
    const response = await axios.get(`${API_URL}/breeds/${id}`);
    const result = transfromDataAPI(response.data)
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getAllBreedsAPI, getInputBreedAPI, getBreedById };
