const { createTempsDB } = require("../services/createTempsDB");
const { getAllTempsDB } = require("../services/reqTempsDB");
const { fliterTemps } = require("../utils/filterTemps");

const getAllTemps = async () => {
  try {
    //Gets temperaments from API
    const tempsAPI = await fliterTemps();
    //Gets temperaments from DB
    const tempsDB = await getAllTempsDB()
    if (!tempsDB.length) {
      //If DB is empty, load all temperaments
      await createTempsDB(tempsAPI);
      //returns all temperaments from API
      return tempsAPI;
    } else if (tempsDB.length < tempsAPI.length) {
      //If API loads new temperaments, the DB is updated
      const newTempsAPI = tempsAPI.filter((el) => !tempsDB.includes(el));
      if (newTempsAPI.length) await createTempsDB(newTempsAPI);
      //returns all temperaments from API
      return tempsAPI;
    }
    //returns all temperaments from DB
    return tempsDB
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getAllTemps };
