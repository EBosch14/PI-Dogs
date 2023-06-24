const { createTempsDB } = require("../services/createTempsDB");
const { getAllTempsDB } = require("../services/reqTempsDB");
const { getAllBreedsAPI } = require("../services/reqBreedsAPI");
const { fliterTemps } = require("../utils/filterTemps");

const getAllTemps = async () => {
  try {
    //Gets breeds from API
    const dogs = await getAllBreedsAPI();
    //fiters all temps for dogs
    const tempsAPI = fliterTemps(dogs);
    //Gets temperaments from DB
    const tempsDB = await getAllTempsDB();

    if (!tempsDB.length) {
      //If DB is empty, load all temperaments
      await createTempsDB(tempsAPI);
      //returns all temperaments from API
      return tempsAPI;
    }

    //Check if API loads new temperaments
    const newTempsAPI = tempsAPI.filter((el) => !tempsDB.includes(el));

    //If API loads new temperaments, the DB is updated
    if (newTempsAPI.length) {
      await createTempsDB(newTempsAPI);
      //returns all temperaments from API and DB
      return [...newTempsAPI, ...tempsDB];
    }

    //returns all temperaments from DB
    return tempsDB;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getAllTemps };
