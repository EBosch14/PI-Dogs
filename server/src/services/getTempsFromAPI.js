const axios = require("axios");
const { fliterTemps } = require("../utils/filterTemps");

const getTempsFromAPI = async (API_URL) => {
  try {
    //Gets all dog breeds registered in API
    const { data } = await axios.get(`${API_URL}/breeds`);
    //Return an array with all temperaments
    return fliterTemps(data);
  } catch (error) {
    throw new Error("Failed to fetch temperaments from API. ", error);
  }
};

module.exports = { getTempsFromAPI };
