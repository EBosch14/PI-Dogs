const { createDogsDB } = require("../services/createDogsDB");
const { validateInfo } = require("../utils/validateInfoDog");

const postDog = async (info) => {
  try {
    const isValid = await validateInfo(info);
    if (isValid) {
      const dog = await createDogsDB(info);
      return dog;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { postDog };
