const { getAllDogsDB } = require("../services/reqDogsDB");

const searchDogs = async (search) => {
  const allDogs = await getAllDogsDB();
  const matchedDogs = allDogs.filter(
    (dog) => dog.name.toLowerCase().includes(search.toLowerCase()) && dog
  );
  return matchedDogs;
};

module.exports = { searchDogs };
