const axios = require("axios");

const getImageUrl = async (id) => {
  const res = await axios.get(`https://api.thedogapi.com/v1/images/${id}`);
  const { url } = res.data;
  return url;
};

module.exports = { getImageUrl };
