const { default: axios } = require("axios");
const { API_URL } = require("../../config");

const fetchAllDogs = async () => {
  const res = await axios.get(`${API_URL}/breeds`);
  const { data } = res;
  return data;
};

const fetchImage = async (id) => {
  const res = await axios.get(`${API_URL}/images/${id}`);
  const { url } = res.data;
  return url;
};

const fetchDogById = async (id) => {
  const res = await axios.get(`${API_URL}/breeds/${id}`);
  const { data } = res;
  return data;
};

module.exports = { fetchAllDogs, fetchImage, fetchDogById };
