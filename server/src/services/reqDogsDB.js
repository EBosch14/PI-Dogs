const { Dogs, Temperaments } = require("../db");

const getAllDogsDB = async () => {
  try {
    const allDogs = await Dogs.findAll({
      include: {
        model: Temperaments,
        attributes: ["id", "name"],
        through: { attributes: [] },
      },
    });
    return allDogs;
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
