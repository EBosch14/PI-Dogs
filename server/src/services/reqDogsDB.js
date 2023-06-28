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
    const result = transformDataDB(allDogs);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getOneDog = async (name) => {
  try {
    return await Dogs.findOne({
      where: {
        name: name,
      },
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getAllDogsDB, getOneDog };
