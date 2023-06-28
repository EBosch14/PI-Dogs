const { getAllDogsDB } = require("../services/reqDogsDB");

const searchDogs = async (search) => {
  try {
    const allDogs = await getAllDogsDB();
    const matchedDogs = allDogs.filter(
      (dog) => dog.name.toLowerCase().includes(search.toLowerCase()) && dog
    );
    return matchedDogs;
  } catch (error) {
    throw error;
  }
};

module.exports = { searchDogs };
