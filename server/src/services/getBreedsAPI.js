const axios = require("axios");
require('dotenv').config
const {API_URL} = process.env

const getBreedsAPI = async () => {
  //Gets all dog breeds registered in API
  try {
    const {data} = await axios.get(`${API_URL}/breeds`);
    return data
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getBreedsAPI };
