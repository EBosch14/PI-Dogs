const { Dogs, Temperaments } = require("../db");
const { transformDataDB } = require("../utils/transformData");

const getAllDogsDB = async () => {
  try {
    const allDogs = await Dogs.findAll({
      include: {
        model: Temperaments,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    const result = transformDataDB(allDogs)
    return result;
  } catch (error) {
    throw error;
  }
};

const getOneDog = async (name) => {
  return await Dogs.findOne({
    where: {
      name: name,
    },
  });
};

module.exports = { getAllDogsDB, getOneDog };
