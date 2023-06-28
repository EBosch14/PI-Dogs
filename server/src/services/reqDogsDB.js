const { Dogs, Temperaments } = require("../db");
const { isValidUUIDv4 } = require("../utils/isValidUUID");
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

const getDogById = async (id) => {
  try {
    const isValid = isValidUUIDv4(id);
    if (isValid) {
      const foundDog = await Dogs.findOne({
        where: {
          id: id,
        },
        include: {
          model: Temperaments,
          attributes: ["name"],
          through: { attributes: [] },
        },
      });
      return foundDog ? transformDataDB(foundDog) : {};
    }
    return {};
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getAllDogsDB, getOneDog, getDogById };
