const { Dogs } = require("../db");

const getDogsDB = async (name = null) => {
  if (!name) {
    const allDogs = await Dogs.findAll();
    return allDogs;
  }
  if(typeof name === 'string') {
    const foundDog = await Dogs.findOne({
      where: {
        name: name,
      },
    });
    return foundDog;
  }
  throw new Error("getDogsDB: the parameter has to be a string.")
};

module.exports = { getDogsDB };
